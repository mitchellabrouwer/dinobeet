/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Difficulty, OccasionOptions, Tags } from "@prisma/client";
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
      maxTime,
    });

    tags.forEach((tag) => params.append("tags", tag));

    const res = await fetch(`/api/recipe?${params}`);

    const data: GetRecipes = await res.json();

    // console.log("data", data);
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
  } = useInfiniteQuery(
    ["recipes", query, difficulty, cost, occasion, maxTime, tags],
    fetchRecipes,
    {
      // @ts-ignore
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  useEffect(() => {
    refetch();
  }, [query, difficulty, cost, occasion, maxTime, tags, refetch]);

  const searchRef = useRef<HTMLInputElement>(null);

  const onSearchEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setQuery(searchRef.current?.value || "");
    }
  };

  const onQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnqueryChange = useCallback(_debounce(onQueryChange, 500), []);

  return (
    <div className="mt-16">
      <div className="relative m-auto max-w-2xl p-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex w-full flex-wrap items-center pl-6">
          <BiSearch color="grey" />
        </div>
        <input
          ref={searchRef}
          type="search"
          id="search"
          className="block w-full rounded-full border p-4 pl-10 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search recipe name or ingredient..."
          onChange={debouncedOnqueryChange}
          onKeyUp={onSearchEnter}
        />
      </div>
      <div className="m-auto mt-2 flex items-center justify-center space-x-3 px-2 sm:max-w-xl md:px-20">
        <div>
          <label htmlFor="occasion" className="block min-w-[100px] text-center">
            Occasion
          </label>
          <Select
            name="occasion"
            options={toReactSelect(OccasionOptions)}
            onChange={(event) => setOccasion(event.value)}
          />
        </div>
        <div>
          <label
            htmlFor="difficulty"
            className="block min-w-[100px] text-center"
          >
            Difficulty
          </label>
          <Select
            name="difficulty"
            options={toReactSelect(Difficulty)}
            onChange={(event) => setDifficulty(event.value)}
          />
        </div>
        <div>
          <label htmlFor="max-time" className="block min-w-[100px] text-center">
            Time
          </label>
          <Select
            name="max-time"
            options={maxTimeSelect}
            onChange={(event) => setMaxTime(event.value)}
          />
        </div>{" "}
        <div>
          <label htmlFor="cost" className="block min-w-[100px] text-center">
            Cost
          </label>
          <Select
            name="cost"
            options={costSelect}
            onChange={(event) => setCost(event.value)}
          />
        </div>
      </div>
      <div className="m-auto my-2 w-full px-2 sm:max-w-xl md:px-20">
        <label htmlFor="tags" className="block min-w-[100px] text-center">
          Tags
        </label>
        <Select
          isMulti
          name="tags"
          options={toReactSelect(Tags)}
          onChange={(selected) => {
            console.log("selected", selected);
            setTags(selected.map((option) => option.value));
          }}
        />
      </div>

      <div>
        {data &&
          data.pages.map((page, index) => (
            <div
              key={index}
              className="grid gap-1 space-x-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
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
      </div>
      {isFetchingNextPage ? (
        <div className="mt-5 text-center italic">Loading...</div>
      ) : null}
      {data?.pages?.length && (
        <div className="mt-5 text-center italic">No matching recipes...</div>
      )}
      <span style={{ visibility: "hidden" }} ref={ref}>
        intersection observer marker
      </span>
    </div>
  );
};
