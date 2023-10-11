import {
  AtomButton,
  AtomInput,
  AtomLink,
  AtomText,
  AtomWrapper,
  backgroundColorInput,
  css,
} from "@stacklycore/ui";
import useRefJotai from "@Src/hooks/useRefJotai";
import { useAtomValue } from "jotai";
import { PrimaryColorAtom } from "@Src/jotai/primaryColor";
import Logo from "@Assets/logo.svg";
import * as Yup from "yup";

import { Urls } from "./navigation";
import { motion } from "framer-motion";
import { ButtonFlatCSS } from "@Src/css/button";
import { useState } from "react";
import { useFormik } from "formik";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const primaryColor = useAtomValue(PrimaryColorAtom);
  const { ref } = useRefJotai("CONTACT");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Insert your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Insert your email"),
      subject: Yup.string().required("Insert a subject"),
      message: Yup.string().required("Insert a message"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);
      const fetchMail = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      await fetchMail.json();
      setLoading(false);
      formik.resetForm();
      // alert("Message sent!");
    },
  });

  return (
    <AtomWrapper
      ref={ref}
      as="section"
      css={() => css`
        justify-content: center;
        align-items: center;
        height: max-content;
        justify-content: space-between;
        min-height: max-content;
      `}
    >
      <AtomWrapper
        css={() => css`
          position: relative;
          max-width: 1440px;
          padding: 40px 90px 40px 90px;
          @media (max-width: 600px) {
            padding: 40px 40px;
          }
          z-index: 1;
          background-color: transparent;
          gap: 20px;
        `}
      >
        <AtomText
          css={() => css`
            font-size: 40px;
            font-weight: 400;
          `}
        >
          <b>Contact</b>
        </AtomText>

        <AtomText
          css={() => css`
            font-size: 16px;
            font-weight: 400;
            b {
              cursor: pointer;
              color: ${primaryColor};
              transition: all 0.3s ease-in-out;
            }
            transition: all 0.3s ease-in-out;
          `}
        >
          Any question you have or something you want to share with me,
          <br /> you can email me at <b>me@willskr.com</b> or find me in this
          accounts:
        </AtomText>
        <AtomWrapper
          css={() => css`
            flex-direction: row;
            width: max-content;
            background-color: transparent;
            gap: 40px;
          `}
        >
          {Urls.map(({ icon, url }) => (
            <AtomLink
              href={url}
              css={() => css`
                cursor: pointer;
                svg {
                  height: 18px;
                }
              `}
              target="_blank"
            >
              {icon}
            </AtomLink>
          ))}
        </AtomWrapper>
        <AtomWrapper
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          css={(theme) => css`
            gap: 10px;
            label {
              width: 100%;
              input {
                width: 100%;
                ${backgroundColorInput(
                  theme?.input?.properties?.background ?? "#ffffff",
                  primaryColor
                )}
              }
              span:nth-child(3) {
                height: max-content;
              }
            }
            .textarea {
              width: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              gap: 5px;
              span {
                padding: 0px 0px 4px 0px;
                font-family: "Inter", sans-serif;
                font-size: 12px;
                font-weight: 600;
                color: ${theme.input?.properties?.label ?? "#222222"};
              }
              span:nth-child(3) {
                height: max-content;
                font-size: 10px;
                color: #ff0000;
              }
              textarea {
                font-family: "Inter", sans-serif;
                font-size: 12px;
                font-weight: 600;
                margin: 0px 0px 0px 0px;
                padding: 15px;
                height: 250px;
                width: 100%;
                border-radius: 4px;
                ${backgroundColorInput(
                  theme?.input?.properties?.background ?? "#ffffff",
                  primaryColor
                )}
              }
            }
          `}
        >
          <AtomWrapper
            css={() => css`
              width: 100%;
              gap: 20px;
              flex-direction: row;
            `}
          >
            <AtomInput labeltext="Name" id="name" formik={formik} />
            <AtomInput labeltext="Subject" id="subject" formik={formik} />
          </AtomWrapper>
          <AtomInput
            labeltext="Email"
            id="email"
            formik={formik}
            error={{
              id: "email",
            }}
          />
          <motion.label className="textarea">
            <motion.span>Type your message here</motion.span>
            <motion.textarea
              id="message"
              {...formik.getFieldProps("message")}
            />
            <motion.span>
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : ""}
            </motion.span>
          </motion.label>
          <AtomButton
            loading={loading}
            type="submit"
            css={() => css`
              ${ButtonFlatCSS(primaryColor)}
              padding: 8px 30px;
            `}
          >
            Send
          </AtomButton>
        </AtomWrapper>
        <AtomWrapper
          css={() => css`
            padding: 0px 0px 20px 0px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            svg {
              width: max-content;
              height: 60px;
            }
          `}
        >
          <Logo />
        </AtomWrapper>
      </AtomWrapper>

      <AtomWrapper
        css={() => css`
          width: 100%;
          height: 40px;
          background-color: ${primaryColor};
          ::before {
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(
              -90deg,
              #000000 0%,
              #000000 5%,
              transparent 50%,
              #000000 95%,
              #000000 100%
            );
            transition: all 0.25s ease-in-out;
          }
          transition: all 0.25s ease-in-out;
        `}
      />
    </AtomWrapper>
  );
};

export default Contact;
