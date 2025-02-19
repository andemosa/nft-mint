"use client";

import { useState } from "react";
import NFTForm from "./NFTForm";
import Success from "./Success";
import { INFT } from "@/types";

const FORMDISPLAY = "FORMDISPLAY",
  SUCCESSDISPLAY = "SUCCESSDISPLAY";

interface IFormData {
  display: typeof FORMDISPLAY | typeof SUCCESSDISPLAY;
  data: INFT | null;
}

const Form = () => {
  const [formState, setFormState] = useState<IFormData>({
    display: FORMDISPLAY,
    data: null,
  });

  const { display, data } = formState;

  const handleSuccess = (data: INFT) => {
    setFormState({
      display: SUCCESSDISPLAY,
      data: data,
    });
  };

  const handleMintNew = () => {
    setFormState({
      display: FORMDISPLAY,
      data: null,
    });
  };

  return (
    <section className="my-10 md:my-14 lg:my-18 p-4 md:p-6 lg:p-8" id="mint-widget">
      {display === FORMDISPLAY ? (
        <NFTForm handleSuccess={handleSuccess} />
      ) : (
        <Success handleMintNew={handleMintNew} data={data} />
      )}
    </section>
  );
};

export default Form;
