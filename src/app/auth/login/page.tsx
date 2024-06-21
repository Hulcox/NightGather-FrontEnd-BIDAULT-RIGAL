"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Card className="w-[28rem]">
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>
            Entrez votre email et votre mot de passe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 gap-4">
                <div>
                  <span>Email :</span>
                  <Input id="email" placeholder="email" type="email" />
                </div>
                <div>
                  <span>Mot de passe :</span>
                  <Input id="password" placeholder="mot de passe" type="text" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between mt-8">
          <Link href={"/auth/register"} className="underline text-primary">
            Pas encore de compte ?
          </Link>
          <Link href={"/home"}>
            <Button>connexion</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
