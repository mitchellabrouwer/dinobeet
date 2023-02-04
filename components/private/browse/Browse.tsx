/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Cost, Tags } from "@prisma/client";
import _debounce from "lodash/debounce";
import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { BiSearch } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import Select from "react-select";
import { GetRecipes } from "../../../types/types";
import { Card } from "../../common/Card";

// type RecipeType = Prisma.RecipeGetPayload<{
//   include: { tags: true };
// }>;

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
interface Option {
  readonly label: string;
  readonly value: string;
}
const maxTimeSelect: Option[] = [
  { value: "", label: "all" },
  { value: "5", label: "< 5 mins" },
  { value: "10", label: "< 10 mins" },
  { value: "20", label: "< 20 mins" },
  { value: "30", label: "< 30 mins" },
  { value: "60", label: "< 60 mins" },
];

const costSelect: Option[] = [
  { value: "", label: "all" },
  { value: "really_cheap", label: "¢" },
  { value: "cheap", label: "$" },
  { value: "ok", label: "$$" },
  { value: "expensive", label: "$$$" },
  { value: "really_expensive", label: "$$$$" },
];

function toReactSelect(options): Option[] {
  const list = Object.keys(options).map((label) => ({ value: label, label }));
  return [{ value: "", label: "all" }, ...list];
}

export const Browse: React.FC = () => {
  const { ref, inView } = useInView();

  console.log("cost", Cost);

  const [query, setQuery] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [maxTime, setMaxTime] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const fetchRecipes = async ({ pageParam = "" }) => {
    const params = new URLSearchParams({
      cursor: pageParam,
      query,
      difficulty,
      cost,
      occasion,
      // maxTime,
      // tags,
    });

    const res = await fetch(`/api/recipe?${params}`);

    const data: GetRecipes = await res.json();

    console.log("data", data);
    return data;
  };

  const {
    isLoading,
    isError,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(["recipes", query], fetchRecipes, {
    // @ts-ignore
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  const searchRef = useRef<HTMLInputElement>(null);

  const onSearchEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setQuery(searchRef.current?.value || "");
    }
  };

  const onQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.value", event.target.value);
    setQuery(event.target.value);
  };

  const debouncedOnqueryChange = useCallback(_debounce(onQueryChange, 500), []);

  return (
    <div className="mt-16">
      <div className="relative m-auto max-w-2xl p-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BiSearch color="grey" />
        </div>
        <input
          ref={searchRef}
          type="search"
          id="search"
          className="block w-full rounded-full border p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search recipes or ingredients..."
          onChange={debouncedOnqueryChange}
          onKeyUp={onSearchEnter}
        />
      </div>
      {isFetchingNextPage ? <div className="loading">Loading...</div> : null}

      <div className="flex items-center justify-center">
        <div>
          <label htmlFor="test" className="block text-center">
            Difficulty
          </label>
          <Select
            name="difficulty"
            options={toReactSelect(Tags)}
            onChange={() => setDifficulty}
          />
        </div>
      </div>

      {data &&
        data.pages.map((page) => (
          <div
            key={page.nextCursor ?? "last"}
            className="grid w-full auto-cols-max grid-cols-1 gap-2  p-1 hover:cursor-pointer md:grid-cols-2"
          >
            {page.recipes.map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                occasion={recipe.occasion}
                cost={recipe.cost}
                difficulty={recipe.difficulty}
                prep={recipe.prep}
                cook={recipe.cook}
                average_rating={5}
                total_votes={20}
                tags={recipe.tags}
              />
            ))}
          </div>
        ))}

      <span style={{ visibility: "hidden" }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
};
