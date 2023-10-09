import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, global, jest} from 'vitest';

import MemberCard from "./MemberCard";
import { fireEvent, userEvent } from "@storybook/testing-library";
import { act } from 'react-dom/test-utils';

function validateWithServer(user){
    console.log("Validate With Server called")
    console.log(user)
}

describe("MemberCard", () => {
    it("renders Member Card component", () => {
        // render(<MemberCard validateData = {validateWithServer}/>);
        render (<MemberCard validateData = {(user) => {
                console.log(user)
        }} />);
        const firstNameField = screen.getByLabelText("First Name");
        const lastNameField = screen.getByLabelText("Last Name");
        const birthdayField = screen.getByLabelText("Birthday");
        const occupationCodeField = screen.getByLabelText("Occupation Code");

        expect(firstNameField).toBeInTheDocument();
        expect(lastNameField).toBeInTheDocument();
        expect(birthdayField).toBeInTheDocument();
        expect(occupationCodeField).toBeInTheDocument();

        fireEvent.change(firstNameField,{
            target: { value: 'Aaron'},
        });
        fireEvent.change(lastNameField,{
            target: { value: 'OBrien'},
        });

        //firstNameField.focus();
        //userEvent.type(firstNameField, 'Aaron');
        

        screen.debug(firstNameField);
        screen.debug(lastNameField);

        // const aDay = 'someday';
        // const code = 'riksy';
        //firstNameField.value = 'Aaron';
        //lastNameField.value = 'OBrien';
        // fireEvent.change(firstNameField,{
        //     target: { value: 'Aaron'},
        // });
  
        // fireEvent.change(birthdayField,{
        //     target: { value: aDay},
        // });
        // fireEvent.change(occupationCodeField,{
        //     target: { value: code},
        // });

        expect (firstNameField.value).toBe("Aaron");
        // expect (lastNameField.value).toBe("OBrien");
       // expect (birthdayField.value).toBe("someday");
        //expect (occupationCodeField.value).toBe("risky");

        const button = screen.getByText("Validate");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
  });

  
  