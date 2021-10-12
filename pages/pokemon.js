import React from "react";
import { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { getPokemon } from "../data/get_pokemon";

export default function Pokemon({ pokemon }) {
  const router = useRouter();
  let { id } = router.query;
  const ref = useRef(null);
  function validationSchema() {
    return Yup.object().shape({
      Number: Yup.number().required("Pokemon number is required"),
      Name: Yup.string().required("Pokemon Name is required"),
      Type_1: Yup.string().required("Type 1 is required"),
      Type_2: Yup.string(),
      Total: Yup.number().required("Total number is required"),
      HP: Yup.number().required("HP number is required"),
      Attack: Yup.number().required("Attack number is required"),
      Defense: Yup.number().required("Defense number is required"),
      SpecialAtk: Yup.number().required("SpecialAtk number is required"),
      SpecialDef: Yup.number().required("SpecialDef number is required"),
      Speed: Yup.number().required("Speed number is required"),
      Generation: Yup.string().required("Generation is required"),
      Legendary: Yup.string().required("Legendary is required"),
    });
  }

  const initialValues = {
    Number: pokemon["Number"],
    Name: pokemon["Name"],
    Type_1: pokemon["Type_1"],
    Type_2: pokemon["Type_2"],
    Total: pokemon["Total"],
    HP: pokemon["HP"],
    Attack: pokemon["Attack"],
    Defense: pokemon["Defense"],
    SpecialAtk: pokemon["SpecialAtk"],
    SpecialDef: pokemon["SpecialDef"],
    Speed: pokemon["Speed"],
    Generation: pokemon["Generation"],
    Legendary: pokemon["Legendary"],
  };

  return (
    <div>
      <div className="py-4">
        <h1 className="text-3xl text-center font-bold text-blue-900">
          Welcome to Your Favorite Pokemon
        </h1>
      </div>
      <div className="flex  items-center justify-center">
        <Formik
          innerRef={ref}
          initialValues={initialValues}
          validationSchema={validationSchema()}
          //onSubmit={registerPokemon}
        >
          {({ resetForm }) => (
            <Form>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Number
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Number"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Number"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Name"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Type_1
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Type_1"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Type_1"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Type_2
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Type_2"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Type_2"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Total
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Total"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Total"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    HP
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="HP"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="HP"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Attack
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Attack"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Attack"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Defense
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Defense"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Defense"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    SpecialAtk
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="SpecialAtk"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="SpecialAtk"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    SpecialDef
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="SpecialDef"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="SpecialDef"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Speed
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Speed"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Speed"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Generation
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Generation"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Generation"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Legendary
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    name="Legendary"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                  <ErrorMessage
                    name="Legendary"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="md:flex flex-row pt-4">
                <div className="md:w-1/3 text-center ">
                  <button
                    type="submit"
                    onClick={resetForm}
                    //className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  ></button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://apercloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Luis Goyburo
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  let pokemon;
  const { id } = context.query;

  try {
    pokemon = await getPokemon(id);
  } catch (e) {
    return {
      notFound: true,
    };
  }
  if (!pokemon) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pokemon,
    },
  };
}
