import React from 'react';
import styled from "styled-components";
import {SectionCenter} from "../../styles/layout/section";
import TitleSection from "../ui/TitleSeccion";
import LiveItem from "../live/LiveItem";

function SectionLiveAction() {
    return (
        <SectionLive>
            <SectionCenter padding>
                <TitleSection title={'Live Action'} link={'#'}/>
                <div className="container-lives">
                    <LiveItem/>
                    <LiveItem/>
                    <LiveItem/>
                    <LiveItem/>
                </div>
            </SectionCenter>
        </SectionLive>
    );
}

const SectionLive = styled.section`
    .container-lives{
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
`

export default SectionLiveAction;
