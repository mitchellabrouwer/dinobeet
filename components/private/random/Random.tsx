import { FC } from 'react';
import { Button } from '../../common/Button';


export const Random: FC = () => {

    const [selectedOcasion, setSelectedOccasion] = useState<string>("");

  // const { error, isLoading, isSuccess, data } = useRandomRecipeQuery(
  //   graphQLClient,
  //   { occasion: selectedOcasion, count: 1 },
  //   { refetchOnWindowFocus: false }
  // );

  // const onCategorySelect = async (e: MouseEvent<HTMLButtonElement>) => {
  //   const { value } = e.currentTarget;
  //   await cacheClient.invalidateQueries(["RandomRecipe", { occasion: value }]);
  //   setSelectedOccasion(value);
  // };
    return (

    <div>
      <div className='flex flex-col'>
        <div className='flex space-x-2'>
          <Button value="breakfast" onClick={onCategorySelect}>
            Breakfast
          </Button>
          <Button value="snack" onClick={onCategorySelect}>
            Snack
          </Button>
          <Button value="lunch" onClick={onCategorySelect}>
            Lunch
          </Button>
          <Button value="dinner" onClick={onCategorySelect}>
            Dinner
          </Button>
        </div>

        {isLoading && <Spinner size="lg" />}
        {!isLoading && isSuccess && data?.randomRecipe && (
          <Card
            id={data.randomRecipe[0].id}
            key={uuidv4()}
            name={data.randomRecipe[0].name}
            occasion={data.randomRecipe[0].occasion}
            cost={data.randomRecipe[0].cost}
            difficulty={data.randomRecipe[0].difficulty}
            prep={data.randomRecipe[0].prep}
            cook={data.randomRecipe[0].cook}
            average_rating={data.randomRecipe[0].average_rating}
            total_votes={data.randomRecipe[0].total_votes}
            tags={data.randomRecipe[0].tags as any}
          />
        )}
      </div>
    </div>
  );
      
    );
}