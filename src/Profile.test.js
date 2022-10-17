import React from "react";
import {render} from "@testing-library/react";
import Profile from './Profile'
// : describe = 테스트 다발

// Profile에 대한 test   

describe("<Profile />", () => {
    // snapshot : 조직도, 소개 등 
    it("matches snapshot", () => {
        const utils = render(<Profile usename="MSY" name="세윤"/>);
        expect(utils, container). toMatchSnapshot();
    });

// props에 대한 test
    it("shows the props correctly", () =>{
        // render된 결과가 utils로 들어가고
        const utils = render(<Profile usename="MSY" name="세윤"/>);
        // 요구사항이 ()안 처럼 출력되는지?
        utils.getByText("MSY1");
        utils.getByText("세윤");
        // username (스페이스) name 인지?
        utils.getByText("MSY (세윤)");
    });
