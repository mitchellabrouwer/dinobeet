import { Box, Button, Spinner } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { STARS } from "../../constants";
import { useFindReviewQuery, useReviewMutation } from "../../generated/graphql";
import graphQLClient from "../../utility/graphql-request";
import { CustomAlert } from "../ui/CustomAlert";
import { InputField } from "../ui/InputField";
import { InputStars } from "./InputStars";

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

export const ReviewForm: React.FC<ReviewFormProps> = ({ recipeId }) => {
  const [rating, setRating] = useState(0);
  const [previousRating, setPreviousRating] = useState<boolean[]>();
  const { data, isSuccess } = useFindReviewQuery(
    graphQLClient,
    {
      recipeId,
    },
    {
      onSuccess: (data) => {
        if (data?.findReview?.rating) {
          const { findReview: { rating = 0 } = {} } = data;
          setRating(rating || 0);
          setPreviousRating([...Array(STARS)].map((_, i) => i <= rating));
        }
      },
    }
  );

  const {
    mutateAsync,
    isSuccess: reviewUpdated,
    isError,
  } = useReviewMutation<Error>(graphQLClient, {});

  const onHandleSubmit = async (
    values: Variables,
    { setSubmitting }: FormikHelpers<Variables>
  ) => {
    try {
      await mutateAsync({ ...values, id: recipeId, rating });
      setSubmitting(false);
    } catch (error) {}
  };

  return (
    <Box p="4">
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            {isSuccess ? (
              <>
                <InputStars
                  initialStars={previousRating}
                  setRating={setRating}
                />
                <InputField
                  name="comment"
                  placeholder={
                    data?.findReview?.comment || "How did it turn out?"
                  }
                  label="Comment"
                  type="textarea"
                  textarea
                />
                <Button
                  mt={4}
                  colorScheme="primary"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  {data?.findReview?.id ? "Update" : "Review"}
                </Button>
              </>
            ) : (
              <Spinner />
            )}

            {reviewUpdated && (
              <CustomAlert
                status="success"
                text="🙏 thanks for your feedback"
              />
            )}
            {isError && (
              <CustomAlert status="error" text="Something went wrong :" />
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};
