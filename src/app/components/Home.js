import * as React from "react";
const Home = (props) => {
  return (
    <div className="bg-white flex flex-col pb-12">
      <div className="self-center flex w-full max-w-[1330px] flex-col items-stretch mt-8 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-14 max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb90537b679e7eeda46db82982218c2cbde0965c2ecf51fc179d16f66e6a242?"
                  className="aspect-[1.46] object-contain object-center w-[130px] overflow-hidden max-w-full ml-16 self-start max-md:ml-2.5"
                />
                <div className="text-gray-800 text-5xl font-extrabold leading-[59px] self-stretch mr-3.5 mt-32 max-md:max-w-full max-md:text-4xl max-md:mr-2.5 max-md:mt-10">
                  Get thumb stopping ...
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-4 mr-3.5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                  <div className="text-gray-800 text-5xl font-extrabold leading-[59px] grow shrink basis-auto max-md:text-4xl">
                    for your
                  </div>
                  <div className="text-violet-500 text-5xl font-extrabold leading-[59px] self-center grow whitespace-nowrap my-auto max-md:text-4xl">
                    Brand
                  </div>
                </div>
                <div className="text-neutral-600 text-opacity-90 text-3xl self-stretch mt-6 max-md:max-w-full">
                  Never run out of....
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-7 self-start">
                  <div className="text-white text-lg font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-500 grow px-8 py-5 rounded-[50px] max-md:px-5">
                    Get started
                  </div>
                  <div className="text-pink-500 text-lg font-semibold leading-5 whitespace-nowrap justify-center items-stretch border shadow-2xl grow px-8 py-5 rounded-[50px] border-solid border-pink-500 max-md:px-5">
                    Request demo
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.83] object-contain object-center w-[100px] overflow-hidden max-w-full mr-20 mt-9 self-end max-md:mr-2.5"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.79] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-2"
              />
            </div>
          </div>
        </div>
        <div className="text-gray-800 text-center text-4xl font-extrabold leading-10 self-center mt-20 max-md:max-w-full max-md:mt-10">
          {" "}
          How does CreatorsBay work?
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1332px] flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col w-full pl-12 pr-8 py-12 rounded-[50px] items-start max-md:max-w-full max-md:mt-8 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[2.06] object-contain object-center w-[136px] overflow-hidden max-w-full mt-2.5"
                />
                <div className="text-white text-xl font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow-2xl bg-violet-500 mt-4 px-9 py-5 rounded-[50px] max-md:px-5">
                  Step 1
                </div>
                <div className="text-neutral-900 text-3xl font-bold self-stretch mt-5">
                  Register and submit campaign brief
                </div>
                <div className="text-neutral-900 text-xl font-medium leading-10 self-stretch mt-7 mb-12 max-md:mb-10">
                  Use our simple brief builder to specify your video specs,
                  concept and creator requirements.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col w-full pl-12 pr-8 py-12 rounded-[50px] items-start max-md:max-w-full max-md:mt-8 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-[66px] overflow-hidden max-w-full mt-2.5"
                />
                <div className="text-white text-xl font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow-2xl bg-violet-500 mt-4 px-8 py-5 rounded-[50px] max-md:px-5">
                  Step 2
                </div>
                <div className="text-neutral-900 text-3xl font-bold self-stretch mt-5">
                  Choose creators you want to work with
                </div>
                <div className="text-neutral-900 text-xl font-medium leading-10 self-stretch mt-7 mb-12 max-md:mb-10">
                  Use our simple brief builder to specify your video specs,
                  concept and creator requirements.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col w-full pl-12 pr-8 py-12 rounded-[50px] items-start max-md:max-w-full max-md:mt-8 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.61] object-contain object-center w-[106px] overflow-hidden max-w-full mt-2.5"
                />
                <div className="text-white text-xl font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow-2xl bg-violet-500 mt-4 px-8 py-5 rounded-[50px] max-md:px-5">
                  Step 3
                </div>
                <div className="text-neutral-900 text-3xl font-bold self-stretch mt-5">
                  Submit and sit back while we get your brand UGC ready !
                </div>
                <div className="text-neutral-900 text-xl font-medium leading-10 self-stretch mt-7 mb-2.5">
                  Use our simple brief builder to specify your video specs,
                  concept and creator requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-[927px] max-w-full items-stretch justify-between gap-5 mt-48 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col items-stretch">
            <div className="text-blue-950 text-xl font-semibold leading-8 uppercase whitespace-nowrap justify-center items-stretch shadow-2xl bg-lime-300 px-8 py-4 rounded-xl max-md:px-5">
              No legal hassles
            </div>
            <div className="flex w-3 shrink-0 h-[11px] flex-col mr-7 mt-12 rounded-[50%] self-end max-md:mr-2.5 max-md:mt-10" />
          </div>
          <div className="text-blue-950 text-xl font-semibold leading-9 uppercase justify-center items-stretch shadow-2xl bg-violet-100 mt-5 px-8 py-4 rounded-xl self-end max-md:px-5">
            No wasting time in negotiations
          </div>
        </div>
        <div className="mt-1 mx-5 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-start max-md:mt-4">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.83] object-contain object-center w-[100px] overflow-hidden max-w-full"
                />
                <div className="text-blue-950 text-xl font-semibold leading-8 uppercase justify-center items-stretch shadow-2xl bg-lime-100 w-[254px] max-w-full mt-20 px-8 py-4 rounded-xl self-end max-md:mt-10 max-md:px-5">
                  Vetted creators with high quality content
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-6 max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex flex-col pt-2.5 px-4 max-md:max-w-full">
                  <div className="text-blue-950 text-center text-6xl font-black leading-[71.98px] tracking-tighter self-center whitespace-nowrap max-md:text-4xl">
                    {" "}
                    Why{" "}
                  </div>
                  <div className="text-slate-800 text-center text-base leading-6 mt-9 max-md:max-w-full">
                    As an ambitious community-driven project, we've placed a
                    strong emphasis
                    <br />
                    on setting the standard for uniqueNFT collector experiences.{" "}
                  </div>{" "}
                  <div className="text-white text-lg font-semibold leading-5 whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-500 self-center mt-8 px-8 py-3.5 rounded-[50px] max-md:px-5">
                    Explore
                  </div>
                </div>{" "}
                <div className="z-[1] flex mt-0 w-[11px] shrink-0 h-[11px] flex-col mr-28 rounded-[50%] self-end max-md:mr-2.5" />
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
              <div className="text-blue-950 text-xl font-semibold leading-9 uppercase justify-center items-stretch shadow-2xl bg-violet-100 w-full my-auto px-8 py-4 rounded-xl max-md:mt-10 max-md:px-5">
                Collaborate with
                <br />
                multiple <br />
                creators at once
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-center flex w-[665px] max-w-full justify-between gap-5 ml-28 mt-5 items-end max-md:flex-wrap">
          <div className="blur-[0.8756421208381653px] flex w-[27px] shrink-0 h-[27px] flex-col mt-12 rounded-[50%] max-md:mt-10" />{" "}
          <div className="text-blue-950 text-xl font-semibold leading-8 uppercase whitespace-nowrap justify-center items-stretch shadow-2xl bg-sky-200 px-8 py-3.5 rounded-xl self-start max-md:px-5">
            No hidden costs involved
          </div>
        </div>
      </div>{" "}
      <div className="flex w-full items-start justify-between gap-5 mt-32 pr-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm flex w-full grow flex-col mx-auto pl-6 py-6 rounded-xl items-start max-md:mt-4 max-md:pl-5">
                <div className="content-start flex-wrap">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-center max-md:mt-3.5">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-square object-contain object-center w-[61px] overflow-hidden rounded-[50%]"
                        />{" "}
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-square object-contain object-center w-[61px] overflow-hidden mt-6 rounded-[50%]"
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-3.5">
                        <div className="text-white text-center text-xs font-medium leading-4 capitalize whitespace-nowrap items-stretch bg-gray-50 bg-opacity-30 justify-center pl-3 pr-9 py-0.5 rounded-[800px] max-md:pr-5">
                          arvind singh
                        </div>{" "}
                        <div className="flex items-stretch justify-between gap-2 mt-2">
                          <div className="bg-gray-50 bg-opacity-40 flex w-[33px] shrink-0 h-[33px] flex-col rounded-md" />{" "}
                          <div className="bg-gray-50 bg-opacity-40 flex w-[70px] shrink-0 h-[33px] flex-col rounded-md" />
                        </div>{" "}
                        <div className="text-white text-center text-xs font-medium leading-4 capitalize whitespace-nowrap items-stretch bg-gray-50 bg-opacity-30 justify-center mt-6 pl-3 pr-7 py-0.5 rounded-[800px] max-md:pr-5">
                          nikita sharma
                        </div>{" "}
                        <div className="flex items-stretch justify-between gap-2 mt-2">
                          <div className="bg-gray-50 bg-opacity-40 flex w-[33px] shrink-0 h-[33px] flex-col rounded-md" />{" "}
                          <div className="bg-gray-50 bg-opacity-40 flex w-[70px] shrink-0 h-[33px] flex-col rounded-md" />
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-center max-md:mt-3.5">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[1.23] object-contain object-center w-[75px] overflow-hidden rounded-[50%]"
                        />{" "}
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-square object-contain object-center w-[61px] overflow-hidden ml-3.5 mt-6 rounded-[50%] self-start max-md:ml-2.5"
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-3.5">
                        <div className="text-white text-center text-xs font-medium leading-4 capitalize whitespace-nowrap items-stretch bg-gray-50 bg-opacity-30 justify-center pl-3 pr-11 py-0.5 rounded-[800px] max-md:pr-5">
                          kajal singh
                        </div>{" "}
                        <div className="flex items-stretch justify-between gap-2 mt-2 pr-8 max-md:pr-5">
                          <div className="bg-gray-50 bg-opacity-40 flex w-[33px] shrink-0 h-[33px] flex-col rounded-md" />{" "}
                          <div className="bg-gray-50 bg-opacity-40 flex w-10 shrink-0 h-[33px] flex-col rounded-md" />
                        </div>{" "}
                        <div className="text-white text-center text-xs font-medium leading-4 capitalize whitespace-nowrap items-stretch bg-gray-50 bg-opacity-30 justify-center mt-6 pl-3 pr-6 py-0.5 rounded-[800px] max-md:pr-5">
                          arvind sharma
                        </div>{" "}
                        <div className="flex items-stretch justify-between gap-2 mt-2 pr-8 max-md:pr-5">
                          <div className="bg-gray-50 bg-opacity-40 flex w-[33px] shrink-0 h-[33px] flex-col rounded-md" />{" "}
                          <div className="bg-gray-50 bg-opacity-40 flex w-10 shrink-0 h-[33px] flex-col rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="text-white text-center text-xs font-medium leading-4 uppercase justify-center items-stretch bg-gray-50 bg-opacity-10 mt-14 px-5 py-0.5 rounded-[800px] max-md:mt-10">
                  Creator's Bay
                </div>
                <div className="text-white text-2xl font-medium leading-8 mt-4">
                  Discover 1,000+ vetted Experienced UGC creators
                </div>
                <div className="text-neutral-800 text-sm leading-7 justify-center items-stretch border bg-white mt-7 px-7 py-3 rounded-[48px] border-solid border-gray-300 max-md:px-5">
                  Instantly Schedule a Demo
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] items-stretch mt-6 pt-12 pb-4 px-4 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
                  <div className="items-start flex gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19360ba84ae2f5147a17e1c67dfc74e8e727f0626ed2229ba5aa6f36809a0156?"
                      className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                      0:00 / 0:23
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ffdcf73b1dedb3926176ba065dd9d7724119177024c11a88ab908df164e351?"
                      className="aspect-[4.13] object-contain object-center w-[62px] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <div className="items-stretch self-stretch flex justify-between gap-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e978f0685cf0f5b8b6299c063f2a031f4de306d58ad7721514d15e87bf49bbd?"
                        className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63070c4d94f4068b7e24611ee29f636442699953636f492ca9a5ff8ccf11a5b?"
                        className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-24 pt-12 pb-4 px-4 self-end max-md:mt-10">
          <img
            loading="lazy"
            srcSet=""
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="items-start flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb09d8809a8f8350e71720c4793781914bfb98cbe419012871a9c6e8b086323?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                0:00 / 0:23
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ffdcf73b1dedb3926176ba065dd9d7724119177024c11a88ab908df164e351?"
                className="aspect-[4.13] object-contain object-center w-[62px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="items-stretch self-stretch flex justify-between gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f4fbc8d12107be0b1c8a855e4127daa66c515c284455eecb3a4bf81cf34b12?"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63070c4d94f4068b7e24611ee29f636442699953636f492ca9a5ff8ccf11a5b?"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-6 pt-12 pb-4 px-4 self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="items-start flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19360ba84ae2f5147a17e1c67dfc74e8e727f0626ed2229ba5aa6f36809a0156?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                0:00 / 0:23
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ffdcf73b1dedb3926176ba065dd9d7724119177024c11a88ab908df164e351?"
                className="aspect-[4.13] object-contain object-center w-[62px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="items-stretch self-stretch flex justify-between gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e978f0685cf0f5b8b6299c063f2a031f4de306d58ad7721514d15e87bf49bbd?"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63070c4d94f4068b7e24611ee29f636442699953636f492ca9a5ff8ccf11a5b?"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-24 pt-12 pb-4 px-4 self-end max-md:mt-10">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="items-stretch flex w-full justify-between gap-5">
              <div className="flex items-stretch justify-between gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb09d8809a8f8350e71720c4793781914bfb98cbe419012871a9c6e8b086323?"
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                  0:00 / 0:23
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-4 pr-1.5">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.23] object-contain object-center w-[3px] fill-black overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-6 pt-12 pb-4 px-4 self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="flex w-full justify-between gap-5 px-0.5 items-start">
              <div className="flex items-stretch gap-3">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.69] object-contain object-center w-[9px] fill-black overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                  0:00 / 0:23
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 pr-1.5">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.23] object-contain object-center w-[3px] fill-black overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-24 pt-12 pb-4 px-4 self-end max-md:mt-10">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="flex w-full justify-between gap-5 px-0.5 items-start">
              <div className="flex items-stretch gap-3">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.69] object-contain object-center w-[9px] fill-black overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                  0:00 / 0:23
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 pr-1.5">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.23] object-contain object-center w-[3px] fill-black overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-6 pt-12 pb-4 px-4 self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="flex w-full justify-between gap-5 px-0.5 items-start">
              <div className="flex items-stretch gap-3">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.69] object-contain object-center w-[9px] fill-black overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                  0:00 / 0:23
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 pr-1.5">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.23] object-contain object-center w-[3px] fill-black overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.7428571428571429] basis-[0%] items-stretch mt-24 pt-12 pb-4 px-4 self-end max-md:mt-10">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-white flex w-full flex-col justify-center items-stretch mt-60 px-4 py-3.5 rounded-3xl max-md:mt-10">
            <div className="flex w-full justify-between gap-5 px-0.5 items-start">
              <div className="flex items-stretch gap-3">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.69] object-contain object-center w-[9px] fill-black overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-xs font-medium leading-8 self-center my-auto">
                  0:00 / 0:23
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 pr-1.5">
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                  className="aspect-[0.23] object-contain object-center w-[3px] fill-black overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex w-full flex-col items-center mt-28 px-20 py-12 self-start max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-gray-800 text-center text-4xl font-bold leading-10 max-w-[1918px] mt-16 max-md:max-w-full max-md:mt-10">
          UGC is your go-to ad Format
          <br />
          in 2023{" "}
        </div>
        <div className="self-stretch ml-20 mr-20 mt-14 mb-10 max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className="text-pink-500 text-center text-3xl font-semibold leading-10">
                  93% of Curtomers
                </div>
                <div className="text-neutral-900 text-xl leading-10 mt-2">
                  It is crucial to know the right type of influencers that will
                  be best fit for implementing cost effective{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <div className="text-pink-500 text-center text-3xl font-semibold leading-10">
                  10x more views
                </div>
                <div className="text-neutral-900 text-xl leading-10 mt-2">
                  It is crucial to know the right type of influencers that will
                  be best fit for implementing cost effective campaigns in order
                  to achieve your business goals.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className="text-pink-500 text-center text-3xl font-semibold leading-10">
                  9.8x More Impactful
                </div>
                <div className="text-neutral-900 text-xl leading-10 mt-2">
                  It is crucial to know the right type of influencers that will
                  be best fit for implementing cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-[811px] max-w-full flex-col mt-20 px-5 max-md:mt-10">
        <div className="text-gray-800 text-center text-4xl font-extrabold leading-10 self-center max-md:max-w-full">
          <span className="text-gray-800">Frequently Asked </span>
          <span className="text-gray-800">Questions</span>
        </div>
        <div className="items-stretch backdrop-blur-[7.5px] self-stretch flex flex-col mt-24 pl-10 pb-8 rounded-lg border-2 border-solid border-pink-500 max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <div className="items-stretch flex justify-between gap-5 pr-1.5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-900 text-2xl font-thin self-center whitespace-nowrap my-auto">
              01
            </div>
            <div className="text-zinc-900 text-2xl font-light self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Sagittis id.
            </div>
            <div className="justify-center items-center backdrop-blur-[7.5px] bg-pink-500 flex basis-[0%] flex-col px-8 py-7 rounded-none max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f637380ada6b8e09ce00b869924e49fd157e4e59632643c10c8099899b5c5f?"
                className="aspect-[0.91] object-contain object-center w-5 overflow-hidden"
              />
            </div>
          </div>
          <div className="text-zinc-900 text-xl font-light leading-9 self-center max-w-[667px] ml-5 mt-5 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus
            ultrices. Ac pharetra ultrices consectetur consequat tellus massa.
            Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet
            ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet
            congue adipiscing. Faucibus magna nisl ullamcorper in facilisis
            consequat aliquam.
          </div>
        </div>
        <div className="items-stretch backdrop-blur-[7.5px] self-stretch flex flex-col justify-center mt-8 pl-10 rounded-lg border-2 border-solid border-pink-500 max-md:max-w-full max-md:pl-5">
          <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-900 text-2xl font-thin self-center whitespace-nowrap my-auto">
              02
            </div>
            <div className="text-zinc-900 text-2xl font-light self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Viverra.
            </div>
            <div className="justify-center items-center backdrop-blur-[7.5px] bg-pink-500 flex basis-[0%] flex-col px-8 py-7 rounded-none max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c36fc2652901b8d1ee975d5ff73e23ff072f63c0a9c4b48d669eaf8d23a9650d?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch backdrop-blur-[7.5px] self-stretch flex flex-col justify-center mt-8 pl-10 rounded-lg border-2 border-solid border-pink-500 max-md:max-w-full max-md:pl-5">
          <div className="items-stretch flex justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-900 text-2xl font-thin self-center whitespace-nowrap my-auto">
              03
            </div>
            <div className="text-zinc-900 text-2xl font-light self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Viverra.
            </div>
            <div className="justify-center items-center backdrop-blur-[7.5px] bg-pink-500 flex basis-[0%] flex-col px-8 py-7 rounded-none max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c36fc2652901b8d1ee975d5ff73e23ff072f63c0a9c4b48d669eaf8d23a9650d?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch backdrop-blur-[7.5px] self-stretch flex flex-col justify-center mt-8 pl-10 rounded-lg border-2 border-solid border-pink-500 max-md:max-w-full max-md:pl-5">
          <div className="items-stretch flex justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-900 text-2xl font-thin self-center whitespace-nowrap my-auto">
              04
            </div>
            <div className="text-zinc-900 text-2xl font-light self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Viverra.
            </div>
            <div className="justify-center items-center backdrop-blur-[7.5px] bg-pink-500 flex basis-[0%] flex-col px-8 py-7 rounded-none max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c36fc2652901b8d1ee975d5ff73e23ff072f63c0a9c4b48d669eaf8d23a9650d?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch backdrop-blur-[7.5px] self-stretch flex flex-col justify-center mt-8 pl-10 rounded-lg border-2 border-solid border-pink-500 max-md:max-w-full max-md:pl-5">
          <div className="items-stretch flex justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-900 text-2xl font-thin self-center whitespace-nowrap my-auto">
              05
            </div>
            <div className="text-zinc-900 text-2xl font-light self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Viverra.
            </div>
            <div className="justify-center items-center backdrop-blur-[7.5px] bg-pink-500 flex basis-[0%] flex-col px-8 py-7 rounded-none max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c36fc2652901b8d1ee975d5ff73e23ff072f63c0a9c4b48d669eaf8d23a9650d?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="text-stone-900 text-5xl font-semibold self-center whitespace-nowrap mt-36 max-md:text-4xl max-md:mt-10">
          From Our Clients
        </div>
      </div>
      <div className="bg-red-200 self-center w-[1320px] max-w-full mt-16 pl-6 pr-20 py-6 rounded-3xl max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1200c2e31007f0fe1b9cb10891389fdc049f07c59be1570ea314ab1aa5a93a65?"
                className="aspect-[1.36] object-contain object-center w-16 overflow-hidden max-w-full"
              />
              <div className="justify-center text-neutral-900 text-2xl font-semibold leading-10 self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                <span className="font-bold text-neutral-900">
                  Creator's Bay
                </span>
                <span className="text-neutral-900">
                  {" "}
                  changed the way we understand and approach influencer
                  marketing.
                </span>
              </div>{" "}
              <div className="justify-center text-neutral-900 text-opacity-80 text-base leading-8 self-stretch mt-6 max-md:max-w-full">
                Not only have we eliminated time-consuming tasks, but the
                ability to discover influencers we might not have
              </div>{" "}
              <div className="justify-center text-neutral-900 text-lg font-semibold leading-9 self-stretch mt-9 max-md:max-w-full">
                Merikom
                <br />
                Influencer Marketing Program Manager, PicsArt
              </div>{" "}
              <div className="items-stretch flex justify-between gap-5 mt-20 max-md:mt-10">
                <div className="justify-center items-center shadow-sm bg-white flex aspect-square flex-col h-14 flex-1 px-4 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c6b49408bae728d80f62a229c5c4d7ecd76ea30409d418cabd7f1118e6d99b?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="justify-center items-center shadow-sm bg-white flex aspect-square flex-col h-14 flex-1 px-4 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3544b78eadd0456a4953739540347c7620e52405eae632bff07b317bf55cd74?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="justify-center items-stretch bg-white flex flex-col mt-16 mb-4 self-start max-md:max-w-full max-md:mt-10">
        <div className="justify-center items-center flex flex-col px-16 py-8 border-t-gray-200 border-t border-solid max-md:max-w-full max-md:px-5">
          <div className="justify-between w-[2249px] max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-4 pb-12 px-4 rounded-lg max-md:mt-10">
                  <div className="text-neutral-800 text-xs font-medium leading-5 uppercase">
                    About
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-5 max-md:mr-0.5">
                    Company
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 max-md:mr-0.5">
                    Careers
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 max-md:mr-0.5">
                    Investors
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 max-md:mr-0.5">
                    Partners
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 max-md:mr-0.5">
                    Press Center
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col pt-4 pb-12 px-4 max-md:mt-10">
                  <div className="text-neutral-800 text-xs font-medium leading-5 uppercase self-stretch">
                    Help
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 mt-5">
                    Support
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 self-start">
                    Disclosure Center
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 mt-3.5 mb-10">
                    Contact Us
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-4 pb-12 px-4 max-md:mt-10">
                  <div className="text-neutral-800 text-xs font-medium leading-5 uppercase whitespace-nowrap">
                    Influencer Marketing Solutions
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 mt-5">
                    Creator Marketplace
                  </div>{" "}
                  <div className="text-gray-500 text-xs leading-5 mt-3.5">
                    Creator's Bay{" "}
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-3.5">
                    Managed Services
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-3.5 mb-8">
                    Pricing
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[15%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col px-4 py-4 rounded-none max-md:mt-10">
                  <div className="text-neutral-800 text-xs font-medium leading-5 uppercase self-stretch whitespace-nowrap">
                    Resources
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-5 self-start">
                    Insights
                  </div>
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 self-start">
                    Case Studies
                  </div>
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap mt-3.5 self-start">
                    Product Updates
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-3.5 self-start">
                    Events
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-3.5 self-start">
                    Blog
                  </div>
                  <div className="text-gray-500 text-xs leading-5 mt-3.5 self-start">
                    Gear
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-gray-50 flex flex-col px-16 py-px border-t-black border-t-opacity-10 border-t border-solid max-md:max-w-full max-md:px-5">
          <div className="max-w-[1922px] items-stretch flex w-full flex-col px-12 max-md:max-w-full max-md:px-5">
            <div className="justify-center items-center flex flex-col pt-8 pb-4 px-16 max-md:max-w-full max-md:px-5">
              <div className="flex items-stretch gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-pink-500 text-xs leading-4 grow shrink basis-auto">
                  © 2023{" "}
                  <span className="font-bold text-pink-500">Creator's Bay</span>{" "}
                </div>{" "}
                <div className="items-stretch flex gap-2 pr-1.5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-800 text-xs leading-4 items-stretch grow justify-center pr-3 border-r-black border-r-opacity-10 border-r border-solid">
                    Terms of Service
                  </div>{" "}
                  <div className="text-neutral-800 text-xs leading-4 items-stretch grow justify-center pr-3 border-r-black border-r-opacity-10 border-r border-solid">
                    Privacy Notice
                  </div>{" "}
                  <div className="text-neutral-800 text-xs leading-4">
                    California Privacy Notice
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="justify-center items-center flex flex-col pt-px pb-8 px-16 max-md:max-w-full max-md:px-5">
              <div className="flex w-[314px] max-w-full items-start gap-5 pr-20 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb90537b679e7eeda46db82982218c2cbde0965c2ecf51fc179d16f66e6a242?"
                  className="aspect-[1.2] object-contain object-center w-full fill-neutral-800 overflow-hidden shrink-0 flex-1 my-auto"
                />{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0983c8f2f9346ff8f3cccbf0702a23946161c0bf345c3fd024e0709d2e3dc0?"
                  className="aspect-[0.56] object-contain object-center w-full fill-neutral-800 overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6757113179ddf735ad87853e0debf009842850b30e710e4dd84c442fe7d47b?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fae6e7e3a4655b92f25e2f7edad6721541d935bafae69c1ffdd2a961b86aba5?"
                  className="aspect-[1.38] object-contain object-center w-full fill-neutral-800 overflow-hidden shrink-0 flex-1 my-auto"
                />{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/898e0b03dc397f261739f76d38e8baa13b9007976ecdcff0573ba24d8d67a445?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;