"use client";
import EventCard from "@/components/eventCard";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";

interface Event {
  id: number;
  address: string;
  type: { type: string };
  numberOfPlaces: number;
  datetime: string;
  organizer: {
    id: number;
    age: number;
    firstname: string;
    lastname: string;
    username: string;
  };
}

const getEvents = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
};

const HomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: () =>
      getEvents().then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.json();
      }),
  });

  console.log(
    data,
    isLoading,
    isError,
    `${process.env.NEXT_PUBLIC_API_URL}/events`
  );

  if (isLoading) {
    return <h1 className="text-center font-bold">Chargement ...</h1>;
  }

  if (isError) {
    return (
      <h1 className="text-center font-bold">
        Pas de soirée prévue en ce moment !
      </h1>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <ChevronRight />
        Localisation
      </div>
      <h2 className="text-xl font-bold text-center my-2">
        Soirée présente autour de toi
      </h2>
      <div className="my-10 flex flex-wrap justify-center gap-4">
        {data.map((event: Event, key: number) => (
          <EventCard
            key={key}
            id={event.id}
            address={event.address}
            type={event.type}
            numberOfPlaces={event.numberOfPlaces}
            organizer={event.organizer}
            datetime={event.datetime}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
