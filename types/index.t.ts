/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  className?: string;
};

declare type HeadingProps = {
  title: string;
  subtext: string;
};
declare type ImageCompProps = {
  image: string;
  imageText?: string;
  like?: boolean;
};
