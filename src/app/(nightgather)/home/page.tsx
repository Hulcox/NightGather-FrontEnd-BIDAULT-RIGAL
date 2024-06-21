"use client";
import EventCard from "@/components/eventCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

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
  participants: any;
}

interface Type {
  id: number;
  type: string;
}

const getEvents = async (type: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events${
      type.length == 0 || type == "ALL" ? "/date" : `/type/${type}`
    }`
  );
};

const getTypes = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types`);
};

const HomePage = () => {
  const [value, setValue] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", value],
    queryFn: () =>
      getEvents(value).then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.json();
      }),
  });

  const types = useQuery({
    queryKey: ["types"],
    queryFn: () =>
      getTypes().then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.json();
      }),
  });

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
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChevronRight />
          Localisation
        </div>
        <Select onValueChange={(value) => setValue(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selectionner un type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"ALL"}>Tous</SelectItem>
            {types.data?.map((value: Type, key: number) => (
              <SelectItem key={key} value={value.type}>
                {value.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
            participants={event.participants}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
