/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { Button } from "../common/Button";
import { Heading } from "../common/Heading";
import { Spinner } from "../common/Spinner";
import { InputStars } from "./InputStars";

interface ReviewFormProps {
  recipeId: string;
}

interface Variables {
  comment: string;
}

const initialValues = { comment: "" };

const validationSchema = yup.object({ comment: yup.string() });

const getReview = async (context) => {
  const [, { id }] = context.queryKey;

  const res = await fetch(`/api/review?id=${id}`);
  const data = await res.json();
  return data;
};

export const ReviewForm: React.FC<ReviewFormProps> = ({ recipeId }) => {
  const [rating, setRating] = useState<number>(0);

  const successToast = () =>
    toast.success("🙏 thanks for your feedback", { position: "bottom-center" });
  const errorToast = () =>
    toast.error("something went wrong", { position: "bottom-center" });

  const [previousRating, setPreviousRating] = useState<number>();
  const { data, isSuccess, refetch } = useQuery(
    ["review", { id: recipeId }],
    getReview,
    {
      onSuccess: (response) => {
        if (response?.review?.rating) {
          setPreviousRating(response.review.rating);
        }
      },
      onError: (response) => {
        errorToast();
      },
    }
  );

  const onUpdateReview = async (
    values: Variables,
    { setSubmitting }: FormikHelpers<Variables>
  ) => {
    try {
      console.log(values);

      const { comment } = values;
      const res = await fetch("/api/review", {
        body: JSON.stringify({ recipeId, rating, comment }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const data = await res.json();
      setSubmitting(false);
      refetch();
      successToast();
      return data;
    } catch (error) {
      errorToast();
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg border border-gray-400 p-4">
      {isSuccess && <ToastContainer />}
      <Formik
        initialValues={initialValues}
        onSubmit={onUpdateReview}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            {isSuccess ? (
              <>
                <div className="w-full text-center">
                  <InputStars
                    initialStars={previousRating}
                    setRating={setRating}
                  />
                </div>

                <label
                  htmlFor="comment"
                  className="font-mediu mb-2 block text-sm"
                >
                  <Heading as="h3">Comment</Heading>
                </label>
                <Field
                  type="textarea"
                  component="textarea"
                  id="comment"
                  name="comment"
                  rows={4}
                  className="h-auto w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder={
                    data?.review?.comment || "Add a comment if you like..."
                  }
                ></Field>
                <div className="flex justify-center">
                  <Button submit>
                    {!isSubmitting ? (
                      data?.review ? (
                        "Update"
                      ) : (
                        "Save"
                      )
                    ) : (
                      <Spinner size="sm" />
                    )}
                  </Button>
                </div>
              </>
            ) : (
              <Spinner size="sm" />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
