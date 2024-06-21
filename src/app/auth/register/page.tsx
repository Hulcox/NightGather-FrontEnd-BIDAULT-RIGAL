"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

const StepInformation = () => {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-6">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Nom : </p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Prenom : </p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>{"Nom d'utilisateur :"}</p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const StepCredential = () => {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-6">
          <div>
            <div className="flex items-center justify-start gap-2">
              <p>{"Numero de téléphone :"}</p>
              <p className="text-red-700">*</p>
            </div>
            <Input id="password" placeholder="mot de passe" type="text" />
          </div>
          <div>
            <div className="flex items-center justify-start gap-2">
              <p>Email : </p>
              <p className="text-red-700">*</p>
            </div>
            <Input id="email" placeholder="email" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Mot de passe : </p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Confirmation Mot de passe : </p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
const StepLocalisation = () => {
  const regions = [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Corse",
    "Grand Est",
    "Guadeloupe,",
    "Guyane",
    "Hauts-de-France",
    "Île-de-France",
    "La Réunion",
    "Martinique",
    "Mayotte",
    "Normandie",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur",
  ];

  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-6">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Region : </p>
                <p className="text-red-700">*</p>
              </div>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Selectionner une region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Région</SelectLabel>
                    {regions.map((name, key) => (
                      <SelectItem value={name} key={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Ville : </p>
                <p className="text-red-700">*</p>
              </div>
              <Input id="password" placeholder="mot de passe" type="text" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const StepProfile = () => {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-6">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Photo de profile : </p>
                <p className="text-red-700">*</p>
              </div>
              <div className="flex justify-between">
                <Input
                  id="password"
                  placeholder="mot de passe"
                  type="file"
                  className="w-[300px]"
                />
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <p>Bio : </p>
                <p className="text-red-700">*</p>
              </div>
              <Textarea placeholder="Ecrivez votre bio ici." />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const StepFinish = () => {
  return <div>Finish</div>;
};

const RegisterPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => (prev == 4 ? 4 : prev + 1));
  };

  const prevStep = () => {
    setStep((prev) => (prev == 0 ? 0 : prev - 1));
  };

  const submit = () => {
    nextStep();
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Card className="w-[28rem]">
        <CardHeader>
          <Progress value={step * 25} className="w-full my-2" />
          <CardTitle>Inscription</CardTitle>
          <CardDescription>
            Veuillez remplir tous le formulaire pour vous inscrire.
          </CardDescription>
          <Link href={"/auth/login"} className="underline text-primary">
            Déjà un compte ?
          </Link>
        </CardHeader>
        <CardContent>
          {step == 0 && <StepInformation />}
          {step == 1 && <StepCredential />}
          {step == 2 && <StepLocalisation />}
          {step == 3 && <StepProfile />}
          {step == 4 && <StepFinish />}
        </CardContent>
        <CardFooter
          className={`flex ${
            step == 0 || step == 4 ? "justify-end" : "justify-between"
          } mt-8`}
        >
          {step != 0 && step != 4 && (
            <Button onClick={prevStep}>Revenir</Button>
          )}
          {step < 3 && <Button onClick={nextStep}>Continuer</Button>}
          {step == 3 && <Button onClick={submit}>Créer</Button>}
          {step == 4 && (
            <Link href={"/home"}>
              <Button>Continuer</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
