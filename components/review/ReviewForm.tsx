import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";
import * as yup from "yup";
import { Button } from "../common/Button";
import { Spinner } from "../common/Spinner";
import { InputStars } from "./InputStars";

const STARS = 5;

interface ReviewFormProps {
  recipeId: string;
}

interface Variables {
  id: string;
  rating: number;
  comment: string;
}

const initialValues = {
  id: "",
  rating: 0,
  comment: "",
};

const validationSchema = yup.object({
  id: yup.string().uuid(),
  rating: yup.number(),
  comment: yup.string(),
});

const getReview = async (context) => {
  const [, { id }] = context.queryKey;

  const res = await fetch(`/api/review?id=${id}`);
  const data = await res.json();
  return data;
};

const updateReview = async ({ id, rating, comment }) => {
  const res = await fetch("/api/review", {
    body: JSON.stringify({ id, rating, comment }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  const data = await res.json();
  return data;
};

export const ReviewForm: React.FC<ReviewFormProps> = ({ recipeId }) => {
  const [rating, setRating] = useState(0);
  const [previousRating, setPreviousRating] = useState<boolean[]>();
  const { data, isSuccess } = useQuery(
    ["review", { id: recipeId }],
    getReview,
    {
      onSuccess: (response) => {
        console.log(response);

        if (data?.review?.rating) {
          // eslint-disable-next-line no-shadow
          const { review: { rating = 0 } = {} } = data;
          setRating(rating || 0);
          setPreviousRating([...Array(STARS)].map((_, i) => i <= rating));
        }
      },
    }
  );
  console.log(data);

  // const {
  //   mutateAsync,
  //   isSuccess: reviewUpdated,
  //   isError,
  // } = useReviewMutation<Error>(graphQLClient, {});

  const onHandleSubmit = async (
    values: Variables,
    { setSubmitting }: FormikHelpers<Variables>
  ) => {
    try {
      console.log(values);
      // { id, rating, comment }
      //       const res = await fetch("/api/review", {
      //         body: JSON.stringify({ id, rating, comment }),
      //         headers: { "Content-Type": "application/json" },
      //         method: "POST",
      //       });

      //       const data = await res.json();
      //       return data;
      setSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
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
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Comment
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder={
                      data.review.comment || "Write your thoughts here..."
                    }
                  ></textarea>
                </label>

                <Button
                // isLoading={isSubmitting}
                >
                  {/* {data?.findReview?.id ? "Update" : "Review"} */}
                </Button>
              </>
            ) : (
              <Spinner size="sm" />
            )}

            {/* {reviewUpdated && (
              <CustomAlert
                status="success"
                text="🙏 thanks for your feedback"
              />
            )}
            {isError && (
              <CustomAlert status="error" text="Something went wrong :" />
            )} */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
