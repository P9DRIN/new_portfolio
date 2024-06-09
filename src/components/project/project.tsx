import Link from 'next/link';
import { BoxComponent } from '../box';

interface ProjectProps {
  techs: Array<string>;
  name: string;
  link: string;
  description: string;
}

export function Project({ techs, name, link, description }: ProjectProps) {
  return (
    <>
      <Link href={link} legacyBehavior>
        <a target="_blank">
          <BoxComponent className="px-6 py-10 gap-2 h-full bg-custom-dark hover:bg-custom-dark-hover flex border-t-4 text-custom-white hover:text-custom-white-hover border-t-neutral-900 flex-col">
            <div className="flex flex-col">
              <span className=" tracking-widest font-semibold text-sm">
                {techs.join(' ')}
              </span>
              <span className=" text-2xl">{name}</span>
            </div>
            <span className="text-sm text-custom-gray hover:text-custom-gray-hover">
              {description}
            </span>
          </BoxComponent>
        </a>
      </Link>
    </>
  );
}
