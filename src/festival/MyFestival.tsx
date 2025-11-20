import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TailCard from "../components/TailCard"

const serviceKey = "c36b872e11a4ce7a8e05133a997bcafac2109f0202652081cdf8e17fa766483d";
let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=40&resultType=json`

export interface FestivalType {
  ADDR1:string,
  ADDR2:string,
  CNTCT_TEL:string,
  GUGUN_NM:string,
  HOMEPAGE_URL:string,
  ITEMCNTNTS:string,
  LAT:number,
  LNG:number,
  MAIN_IMG_NORMAL:string,
  MAIN_IMG_THUMB:string,
  MAIN_PLACE:string,
  MAIN_TITLE:string,
  MIDDLE_SIZE_RM1: string,
  PLACE:string,
  SUBTITLE:string,
  TITLE:string,
  TRFC_INFO:string,
  UC_SEQ:number,
  USAGE_AMOUNT:string,
  USAGE_DAY:string,
  USAGE_DAY_WEEK_AND_TIME:string
}

export default function MyFestival() {
  const [tags, setTags] = useState<React.ReactElement[]>([]); //구/군 선택하면 나오는 카드들
  const [festivalData, setFestivalData] = useState<FestivalType[]>([]); //fetch한 데이타 초기
  const [gu, setGu] = useState<React.ReactElement[]>([]); //옵션에 들어가는 구/군 옵션배열. 굳이 스테이트 변수 안써도됐음
  const [filteredData, setFilteredData] = useState<FestivalType[]>([]); // 구/군 선택하면 그에 맞게 festivalData를 필터

  const selectRef = useRef<HTMLSelectElement>(null);

  const getFetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log('data', data);
    let items: FestivalType[] = await data.getFestivalKr.item;

    setFestivalData(items);
    setGu([...new Set(items.map(d => d["GUGUN_NM"]))].sort().map(g =>
      <option key={g} >{g}</option>));
  };

  const handleChange = () => {

    (selectRef.current?.value == "구/군") ? setFilteredData([])
      :
      setFilteredData(
        festivalData.filter(d => d["GUGUN_NM"] == selectRef.current?.value)
      );
  };

  useEffect(() => {
    getFetchData();
  }, [])

  useEffect(() => {
    if (filteredData.length == 0) return;

    setTags(
      filteredData.map((d, idx) =>
        <Link key={d["UC_SEQ"] + idx} to="/Festival/Content" state={{ contents: d }}>
          <TailCard key={d["UC_SEQ"]} imgURL={d["MAIN_IMG_THUMB"]} title={d["TITLE"]}
            date={d["USAGE_DAY_WEEK_AND_TIME"]} p={d["MAIN_PLACE"]} />
        </Link>
      )
    )
  }, [filteredData])

  useEffect(() => {
    //console.log('tags: ',tags);
  }, [tags])

  useEffect(() => {
    //console.log('부산시의 구들: ',gu);
  }, [gu])


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl p-5">부산축제정보</h1>
      <div className="w-7/10 p-5 flex flex-row justify-center items-center">
        <select className="border p-1" ref={selectRef} onChange={handleChange}>
          <option key="1">구/군</option>
          {gu}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        {tags}
      </div>
    </div>
  )
}
