import { memo } from "react";
import { BulletPointsType } from "../../data/project";

const BulletPoints = memo(
  ({ features, title }: { features?: BulletPointsType[]; title: string }) => (
    <>
      <h4 className="font-bold p-10 m-0 text-2xl text-center"> {title}</h4>
      {features?.map((feature) => (
        <ul
          key={feature.heading}
          className="grid grid-cols-[25%,5%,70%] pl-6 text-2xl xl:pl-20 "
        >
          <li className="font-bold first:list-disc">{feature.heading}</li>
          <li className="text-left md:pr-20">:</li>
          <li>{feature.content}</li>
        </ul>
      ))}
    </>
  )
);

BulletPoints.displayName = "BulletPoints";

export default BulletPoints;
