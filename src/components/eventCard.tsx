import { DateTime } from "luxon";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Event {
  id: number;
  address: string;
  datetime: string;
  type: { type: string };
  numberOfPlaces: number;
  organizer: {
    id: number;
    age: number;
    firstname: string;
    lastname: string;
    username: string;
  };
  participants: any;
}

const EventCard = ({
  id,
  address,
  type,
  numberOfPlaces,
  organizer,
  datetime,
  participants,
}: Event) => {
  const fallBackAvatar = `${organizer?.firstname.slice(
    0,
    1
  )}${organizer?.lastname.slice(0, 1)}`;

  return (
    <Card className="w-full md:w-[30%] backdrop-blur-xl bg-secondary/40 text-white border-2 border-secondary shadow-black shadow-md hover:shadow-lg hover:shadow-secondary">
      <CardHeader>
        <CardTitle className="text-md min-h-14">{address}</CardTitle>
        <CardDescription>
          <Badge>{type?.type}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Places restantes: {numberOfPlaces - participants?.length} /{" "}
          {numberOfPlaces}
        </p>
        <p>
          Commence le:{" "}
          {DateTime.fromISO(datetime)
            .setLocale("fr")
            .toLocaleString(DateTime.DATETIME_MED)}
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-black">
            {fallBackAvatar}
          </AvatarFallback>
        </Avatar>
        <p>{organizer?.username}</p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
