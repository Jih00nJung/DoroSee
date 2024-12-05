import {useEffect} from "react";
import './Admin_data.css';

const Admin_data = () => {

    return (
        <admin_data className="admin_data">
            <div className="stack_event">
                <br/>
                <span>누적 발생 현황</span>
                <br/>
                <br/>
                <div className="event_container">
                    <div className="per_event">
                        <p>전체</p>
                        <b><span>1,000,000</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>대기중</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>처리중</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="event">
                <h3>시간별 발생 건수</h3>
                <div className="event_container">
                    <div className="per_event">
                        <p>오늘</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>최근 1주</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>최근 1달</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                </div>
            </div>
            <div className="event">
                <h3>지역별 발생 건수</h3>
                <div className="event_container">
                    <div className="per_event">
                        <p>서울</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>수도권</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>지방</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                </div>
            </div>
            <div className="event">
                <h3>유형별 발생 건수</h3>
                <div className="event_container">
                    <div className="per_event">
                        <p>포트홀</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>크랙</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                    <div className="per_event">
                        <p>기타</p>
                        <b><span>변수명</span>&nbsp;건</b>
                    </div>
                </div>
            </div>

        </admin_data>
    );
};

export default Admin_data;
