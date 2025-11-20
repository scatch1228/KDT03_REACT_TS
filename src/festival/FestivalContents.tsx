import { useLocation, Link } from "react-router-dom"
import TailButton from "../components/TailButton";
import type { FestivalType } from "./MyFestival";

export default function FestivalContents() {
    const location = useLocation();
    const contents : FestivalType = location.state.contents;
    //console.log(contents);
    return (
    <>
        <div className='flex flex-row w-300 m-5 border p-5'>
            <img src={contents["MAIN_IMG_THUMB"]} />
            <div className="flex flex-col m-2 p-2">
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">제목</div>
                    <div className="m-1 w-160">{contents["TITLE"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">기간</div>
                    <div className="m-1 w-160">{contents["USAGE_DAY_WEEK_AND_TIME"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">장소</div>
                    <div className="m-1 w-160">{contents["ADDR1"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">대중교통</div>
                    <div className="m-1 w-160">{contents["TRFC_INFO"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">홈페이지</div>
                    <div className="m-1 w-160">{contents["HOMEPAGE_URL"]}</div>
                </div>
                <div className="w-full flex flex-row">
                    <div className="w-20 m-1 pr-1 border-r text-right">내용</div>
                    <div className="m-1 w-160 text-sm">{contents["ITEMCNTNTS"]}</div>
                </div>
            </div>
        </div>
        <Link to="/Festival" state={{contents:contents["GUGUN_NM"]}}>
            <TailButton color="blue" text="돌아가기" 
            onHandle={()=>{}}
            />
        </Link>
    </>
  )
}
