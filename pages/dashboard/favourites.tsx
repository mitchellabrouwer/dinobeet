import Head from "next/head";
import { PrivatePage } from "../../components/common/PrivatePage";
import { Favourites } from "../../components/user/favourites/Favourites";

export default function FavouritesPage() {
  return (
    <PrivatePage>
      <Head>
        <title />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Favourites />
    </PrivatePage>
  );
}
