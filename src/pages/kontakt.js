import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Kontakt = () => {
    return (
        <Layout>
            <section>
                <div className="absolute top-0 -z-30 min-h-[40rem] h-full w-full">
                    <StaticImage
                        className="absolute opacity-100 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                        placeholder="blurred"
                        src="../assets/bgAboutUs.png"
                        alt="samochód retro z otwarta maską"
                    />
                </div>
                <div class="py-12">
                    <div class="max-w-screen-2xl flex flex-col items-center justify-center lg:flex-row lg:items-start px-4 md:px-8 mx-auto">
                        <div
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="mb-10 md:mb-16 flex flex-col items-center justify-center"
                        >
                            <h1 class="text-2xl text-amber-400 lg:text-3xl changeColor font-semibold text-center mb-4 md:mb-6">
                                Formularz Kontaktowy
                            </h1>

                            <p class="max-w-screen-md w text-white w-4/5 md:text-lg text-center mx-auto">
                                {" "}
                                Skorzystaj z naszego formularza kontaktowego,
                                aby wysłać do nas wiadomość. Prosimy o podanie
                                swoich danych kontaktowych oraz treści
                                wiadomości, a my postaramy się odpowiedzieć na
                                nią jak najszybciej. Jesteśmy do Twojej
                                dyspozycji i z przyjemnością odpowiemy na
                                wszystkie Twoje pytania.
                            </p>

                            <div className="flex flex-col items-center justify-center mt-4">
                                <Link
                                    to="tel:698947754"
                                    className="text-white flex items-center w-full justify-center"
                                >
                                    <svg
                                        className="w-10 h-auto mr-2"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <g
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="yellow"
                                            stroke="none"
                                        >
                                            <path
                                                d="M2395 4683 c-927 -81 -1677 -713 -1900 -1602 -46 -185 -59 -302 -59
                                                -521 0 -149 5 -235 18 -315 77 -474 273 -863 601 -1190 329 -329 726 -529
                                                1195 -602 158 -24 462 -24 620 0 470 73 866 272 1195 602 330 329 529 725 602
                                                1195 12 81 17 173 17 310 0 354 -67 647 -218 950 -286 577 -825 997 -1451
                                                1131 -180 38 -451 57 -620 42z m-432 -1010 c30 -18 287 -314 328 -378 29 -46
                                                25 -126 -9 -200 -36 -76 -131 -196 -211 -266 -33 -29 -61 -60 -61 -69 0 -36
                                                135 -210 290 -373 148 -156 416 -377 459 -377 9 0 41 28 70 61 70 80 190 175
                                                266 211 74 35 154 38 200 9 69 -45 361 -299 380 -331 15 -27 20 -52 20 -106
                                                -1 -100 -49 -198 -137 -280 -249 -230 -654 -195 -1084 92 -140 94 -231 171
                                                -412 349 -320 314 -495 564 -587 838 -94 281 -58 535 100 705 56 61 142 114
                                                211 131 54 14 139 6 177 -16z"
                                            />
                                        </g>
                                    </svg>
                                    <p>(+48)698-947-754</p>
                                </Link>
                                <Link
                                    to="mailto:rejestracjanazolte@gmail.com"
                                    className="text-white flex items-center w-full justify-center mt-2"
                                >
                                    <svg
                                        className="w-9 h-auto mr-2"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <g
                                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            fill="yellow"
                                            stroke="none"
                                        >
                                            <path
                                                d="M2265 5109 c-487 -60 -917 -239 -1310 -547 -104 -82 -350 -334 -431
                                                    -442 -289 -385 -454 -791 -510 -1250 -20 -168 -15 -550 10 -705 83 -517 320
                                                    -995 679 -1371 394 -412 874 -667 1441 -766 174 -30 543 -37 727 -13 1188 149
                                                    2110 1084 2239 2272 16 145 8 533 -14 667 -184 1134 -1088 2011 -2216 2151
                                                    -135 16 -493 19 -615 4z m1757 -1422 c67 -33 121 -90 154 -162 l24 -53 -2
                                                    -923 -3 -924 -23 -43 c-35 -66 -88 -119 -150 -149 l-57 -28 -1405 0 -1405 0
                                                    -46 21 c-67 31 -124 87 -159 156 l-30 61 0 916 0 916 24 51 c43 93 114 156
                                                    206 180 35 10 357 12 1430 11 l1385 -2 57 -28z"
                                            />
                                            <path
                                                d="M1440 3446 c59 -56 1117 -885 1126 -882 11 4 1087 856 1114 882 12
                                                    12 -143 14 -1120 14 -974 0 -1132 -2 -1120 -14z"
                                            />
                                            <path
                                                d="M1170 2512 c0 -781 1 -820 18 -835 17 -16 127 -17 1374 -17 1300 0
                                                    1356 1 1371 18 16 17 17 89 17 835 0 449 -2 817 -5 817 -3 0 -298 -233 -657
                                                    -518 -359 -285 -663 -524 -675 -530 -28 -15 -78 -15 -106 0 -12 6 -316 245
                                                    -675 530 -359 285 -654 518 -657 518 -3 0 -5 -368 -5 -818z"
                                            />
                                        </g>
                                    </svg>

                                    <p>rejestracjanazolte@gmail.com</p>
                                </Link>

                                <iframe title="nazoltej.pl google maps" className="w-full h-64 rounded-xl mt-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.8170767244305!2d20.90524041596852!3d51.80950294639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719198228caeb4b%3A0x611e0084aa653055!2sNa%C5%BB%C3%B3%C5%82tej.Pl%20pojazdy%20zabytkowe%2C%20rzeczoznawca%20samochodowy!5e0!3m2!1spl!2spl!4v1679745516159!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className="bg-zinc-700/40 shadow-sm shadow-amber-200/10 p-4 lg:mx-6 lg:p-6 rounded-xl"
                        >
                            <form
                                action="https://public.herotofu.com/v1/dabade50-cb08-11ed-9434-5b53665d9a66"
                                method="post"
                                accept-charset="UTF-8"
                                className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
                            >
                                <div>
                                    <label
                                        htmlFor="imie"
                                        for="imie"
                                        className="inline-block text-zinc-300  text-sm sm:text-base mb-2"
                                    >
                                        Imię
                                    </label>
                                    <input
                                        name="imie"
                                        type="text"
                                        placeholder="Imię"
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="tel"
                                        for="tel"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Tel
                                    </label>
                                    <input
                                        name="tel"
                                        type="tel"
                                        placeholder="+48 521 521 500"
                                        pattern="[0-9+]{9,12}"
                                        required
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="mail"
                                        for="mail"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        name="mail"
                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                                        placeholder="email@nażółtej.pl"
                                        class="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div class="sm:col-span-2">
                                    <label
                                        htmlFor="wiadomość"
                                        for="wiadomość"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Wiadomość
                                    </label>
                                    <textarea
                                        name="wiadomość"
                                        class="w-full h-64 bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    ></textarea>
                                </div>

                                <div class="sm:col-span-2 flex justify-between items-center">
                                    <p class="text-gray-400 text-xs">
                                        Szybki Kontakt
                                    </p>
                                    <button class="inline-block border-2 border-white bg-gray-800 hover:bg-gray-600 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-0 transition duration-200 hover:scale-95 px-8 py-3">
                                        Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Kontakt" />;

export default Kontakt;
