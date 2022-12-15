import _debounce from "lodash/debounce";
import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Option {
  readonly label: string;
  readonly value: string;
}

// import {ValueType, ActionMeta} from 'react-select';

// type MyOptionType = { label: string, value: number }

type OnChange = (value: Option) => void;

const take = 5;

const difficultySelect: Option[] = [
  { value: "", label: "all" },
  { value: "easy", label: "easy" },
  { value: "medium", label: "medium" },
  { value: "hard", label: "hard" },
];

const occasionSelect: Option[] = [
  { value: "", label: "all" },
  { value: "breakfast", label: "breakfast" },
  { value: "snack", label: "snack" },
  { value: "lunch", label: "lunch" },
  { value: "dinner", label: "dinner" },
  { value: "treat", label: "treat" },
];

const costSelect: Option[] = [
  { value: "", label: "all" },
  { value: "¢", label: "¢" },
  { value: "$", label: "$" },
  { value: "$$", label: "$$" },
  { value: "$$$", label: "$$$" },
  { value: "$$$$", label: "$$$$" },
];

const maxTimeSelect: Option[] = [
  { value: "", label: "all" },
  { value: "5", label: "< 5 mins" },
  { value: "10", label: "< 10 mins" },
  { value: "20", label: "< 20 mins" },
  { value: "30", label: "< 30 mins" },
  { value: "60", label: "< 60 mins" },
];

// get these from server
const tagsSelect: Option[] = [
  { value: "protein", label: "protein" },
  { value: "omega 3", label: "omega 3" },
  { value: "iron", label: "iron" },
  { value: "bitesized", label: "bitesized" },
  { value: "winter", label: "winter" },
  { value: "summer", label: "summer" },
  { value: "lunchbox", label: "lunchbox" },
  { value: "dipping", label: "dipping" },
  { value: "hosting", label: "hosting" },
  { value: "camping", label: "camping" },
  { value: "on the go", label: "on the go" },
  { value: "fun", label: "fun" },
  { value: "nutritious", label: "nutritious" },
  { value: "sometimes food", label: "sometimes food" },
  { value: "stores well", label: "stores well" },
  { value: "freezer friendly", label: "freezer friendly" },
];

export const Browse: React.FC = () => {
  const [recipesList, setRecipesList] = useState<Array<any>>([]);
  const [skip, setSkip] = useState(0);
  const [query, setQuery] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [occasion, setOccasion] = useState<string>("");
  const [maxTime, setMaxTime] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const hasMore = useRef<boolean>(false);
  const lastRecipeNode = useRef<Element>();
  const { current: observer } = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore.current) {
        setSkip((prev) => prev + take);
      }
    })
  );

  // const { error, isLoading, data } = useFindRecipesQuery(graphQLClient, {
  //   take,
  //   skip,
  //   query,
  //   difficulty,
  //   cost,
  //   occasion,
  //   maxTime,
  //   tags,
  // });

  useEffect(() => {
    setSkip(0);
    setRecipesList([]);
  }, [query, occasion, difficulty, cost, maxTime, tags]);

  // useEffect(() => {
  //   // const { findRecipes: { recipes = [], recipesCount = 0 } = {} } = data || {};

  //   hasMore.current = skip + take <= recipesCount;

  //   if (recipes.length) {
  //     setRecipesList((previous) => {
  //       console.log("prev", previous);
  //       console.log("recipes", recipes);
  //       return [..._cloneDeep(previous), ..._cloneDeep(recipes)];
  //     });
  //   }

  //   console.log(recipesList);
  // }, [data?.findRecipes]);

  const lastRecipeCallbackRef = (node: Element) => {
    // if (isLoading) return;

    if (lastRecipeNode.current) {
      observer.unobserve(lastRecipeNode.current);
    }

    if (node && hasMore.current) {
      observer.observe(node);
      lastRecipeNode.current = node;
    }
  };

  const searchRef = useRef<HTMLInputElement>(null);

  const onSearchClick = () => {
    setQuery(searchRef.current?.value || "");
  };

  const onSearchEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setQuery(searchRef.current?.value || "");
    }
  };

  const onqueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const debouncedOnqueryChange = useCallback(
    _debounce(onqueryChange, 5000),
    []
  );

  return (
    <form>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
