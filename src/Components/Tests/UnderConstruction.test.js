import { UnderConstruction } from "../UnderConstruction";
import React from "react";
import {render, screen} from "@testing-library/react"

describe('components rendered', ()=>{
    test('heading should render first', () => {
        render(<UnderConstruction/>);

        const bannerElement= screen.getByRole('heading');
            expect(bannerElement).toBeInTheDocument();
        
        });

    it('image rendered', ()=>{
        render(<UnderConstruction/>)

        const imageElement=screen.getByAltText('under construction banner');
        expect(imageElement).toBeInTheDocument();
})
        
})
