import { Project } from '@/components/project/project'
import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { RiExternalLinkLine } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { LuMailPlus } from 'react-icons/lu'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Head>
        <title>Lima Silva</title>
      </Head>
      <div className="w-[100vw] relative overflow-hidden md:h-screen flex-col-reverse lg:flex-row flex bg-primary p-20 items-center justify-center gap-12 ">
        <div className="lg:w-1/3 h-[60%] overflow-y-auto flex flex-col gap-1 ">
          <Project
            techs={['Typescript', 'Next', 'Nest', 'Postgresql']}
            name="Schedule Shave"
            link="https://scheduleshave.netlify.app"
            description="[Ainda em construção] Sistema de Gerenciamento de agendamentos para cortes de cabelo!"
          />
          <Project
            techs={['Typescript', 'React', 'Express', 'MongoDB']}
            name="Virtual Budget"
            link="https://virtualbudgets.netlify.app"
            description="Facilitar o controle de gastos baseado em projetos e orçamentos de projetos.
             É possível adicionar novos projetos, novos orçamentos, verificar o orçamento disponível, gastos e muito mais."
          />
          <Project
            techs={['Typescript', 'React', 'Express', 'MongoDB']}
            name="Smorp"
            link="https://smorp.netlify.app"
            description="Smorp é um e-commerce de roupas básicas.
             Tem como objetivo trazer simplicidade e agilidade na compra."
          />
        </div>
        <div className="lg:w-[38%] flex h-1/2 flex-col justify-between text-custom-white-hover gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="font-bold text-4xl">
                Pedro Henrique Lima Silva
              </span>
              <span className="tracking-widest font-normal text-lg">
                Desenvolvedor Web
              </span>
            </div>
            <span className="text-custom-gray hidden text-justify md:flex">
              Desenvolvedor Web há quase um ano no mercado. Buscando integrar a
              programação e criatividade em busca de soluções que resolvem, de
              fato, por meio de boas práticas.
              <br />
              Pronto para transformar qualquer ideia em grandes experiências:
              Deixe-me transformar as suas, também!
            </span>
            <span className="text-custom-gray flex md:hidden">
              Desenvolvedor Web há quase um ano no mercado. Buscando integrar a
              programação e criatividade em busca de soluções que resolvem, de
              fato, por meio de boas práticas.
            </span>
          </div>
          <div>
            <Link
              href="mailto:pedrohenriquelimasilva2837@hotmail.com"
              legacyBehavior
            >
              <a
                target="_blank"
                className="w-full bg-custom-dark hover:bg-custom-dark-hover py-5 rounded-sm flex items-center justify-center"
              >
                <LuMailPlus size="24" />
              </a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:mb-2 mt-6 md:mt-0  gap-8">
            <Link href="https://www.linkedin.com/in/p9drin/" legacyBehavior>
              <a target="_blank">
                <div className="cursor-pointer flex items-center gap-2 text-custom-gray-hover hover:text-custom-white-hover">
                  <BsLinkedin
                    size={24}
                    className="shadow-md bg-custom-dark hover:bg-custom-dark-hover"
                  />
                  <span className="tracking-wider font-semibold">LinkedIn</span>
                  <RiExternalLinkLine />
                </div>
              </a>
            </Link>
            <Link href="https://github.com/P9DRIN" legacyBehavior>
              <a target="_blank">
                <div className="cursor-pointer flex items-center gap-2 text-custom-gray-hover hover:text-custom-white-hover">
                  <FaGithub
                    size={24}
                    className="shadow-md rounded-full bg-custom-dark hover:bg-custom-dark-hover"
                  />
                  <span className="tracking-wider font-semibold">GitHub</span>
                  <RiExternalLinkLine />
                </div>
              </a>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5512992391602"
              legacyBehavior
            >
              <a target="_blank">
                <div className="cursor-pointer flex items-center gap-2 text-custom-gray-hover hover:text-custom-white-hover">
                  <FaWhatsapp size={24} className="" />
                  <span className="tracking-wider font-semibold">WhatsApp</span>
                  <RiExternalLinkLine />
                </div>
              </a>
            </Link>
            {/* <Link href="/pedrohenriquelimasilva_curriculum.pdf" legacyBehavior> */}
            {/* <span>https://drive.google.com/file/d/17S6YXKCXxQygNgZBcT8Lomw0iT6Zd9yE/view?usp=sharing</span> */}
            {/* <a target="_blank" download> */}
            <button
              onClick={() => {
                setModal(true)
              }}
              className="cursor-pointer flex items-center gap-2 text-custom-gray-hover hover:text-custom-white-hover"
            >
              <div className="rounded-full w-7 h-7">
                <Image
                  src="/shysmile.jpeg"
                  alt=""
                  width="50"
                  height="50"
                  quality={100}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <span className="tracking-wider font-semibold">Curriculum</span>
              <RiExternalLinkLine />
            </button>

            {modal && (
              <>
                <button
                  className="absolute w-screen h-full top-0 left-0 bg-custom-dark opacity-80"
                  onClick={() => {
                    setModal(false)
                  }}
                />
                <div className="absolute h-1/5 w-1/2 top-1/2 left-1/2 p-6 transform -translate-x-1/2 -translate-y-1/3 bg-custom-dark-hover">
                  <button
                    onClick={() => {
                      setModal(false)
                    }}
                    className="border font-medium hover:bg-custom-white hover:text-custom-dark px-3 py-1 rounded-md transition-colors"
                  >
                    X
                  </button>
                  <div
                    className="absolute transform flex w-[140px] h-[165px] -top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/3
                   rounded-full p-2 bg-custom-dark-80-opacity border-4 border-custom-dark-80-opacity"
                  >
                    <Image
                      src="/shysmile.jpeg"
                      alt="myself"
                      height={400}
                      width={400}
                      quality={100}
                      className="w-full h-full object-contain rounded-full shadow-md shadow-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row justify-between mt-12">
                    <Link
                      href="/pedrohenriquelimasilva_curriculum.pdf"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-center md:w-1/3 border rounded-sm p-2 hover:bg-custom-white hover:text-custom-dark font-semibold transition-colors"
                      >
                        Baixar
                      </a>
                    </Link>
                    <Link
                      href="https://drive.google.com/file/d/17S6YXKCXxQygNgZBcT8Lomw0iT6Zd9yE/view?usp=sharing"
                      legacyBehavior
                    >
                      <a
                        target="_blank"
                        className="text-center md:w-1/3 border rounded-sm p-2 hover:bg-custom-white hover:text-custom-dark font-semibold transition-colors"
                      >
                        Ver Online
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
