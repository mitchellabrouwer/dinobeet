import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrivatePage } from "../../../components/common/PrivatePage";
import { Recipe } from "../../../components/recipe/Recipe";

const validUuidv4 = (argument: any) =>
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
    argument
  );

export default function RecipePage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [isUuid, setIsUuid] = useState(true);

  useEffect(() => {
    if (validUuidv4(router.query.recipe)) {
      setIsUuid(true);
    }

    if (typeof router.query.recipe === "string" && isUuid) {
      setId(router.query.recipe);
    }
  }, [router.query]);

  return (
    <PrivatePage>
      <Recipe id={id} />
    </PrivatePage>
  );
}
