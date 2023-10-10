import React, {useState} from "react";
import Card from "@mui/material/Card"
import { CardContent, CardHeader, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const styles = {
    card: { maxWidth: 400 },
    content: { maxWidth: 400}, 
    media: { height: 300 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  };

export default function MemberCard( props ){
    const [firstName, setFirstName] = useState("")
    const [firstNameIsError, setFirstNameIsError] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameIsError, setLastNameIsError] = useState(false)

    const [gender, setGender] = useState("")
    const [genderIsError, setGenderIsError] = useState(false)

    const [birthday, setBirthDay] = useState("")
    const [birtydayIsError, setBirthdayIsError] = useState(false)

    const [ocCode, setOcCode] = useState("")
    const [ocCodeIsError, setOcCodeIsError] = useState(false)

    const [hasLife, setHasLife] = useState(false)
    const [hasDental, setHasDental] = useState(false)
    const [hasLtd, setHasLtd] = useState(false)

    const [hideError, setHideError] = useState(true)

    function validateUser(e, callbackMethod){
        validateEmptyTextField(firstName, setFirstNameIsError)
        validateEmptyTextField(lastName, setLastNameIsError)
        validateEmptyTextField(birthday, setBirthdayIsError)
        validateEmptyTextField(ocCode, setOcCodeIsError)
        validateEmptyTextField(gender, setGenderIsError)

        if (firstName === '' || 
            lastName === '' || 
            birthday === '' || 
            gender === '' ||
            ocCode === '' ){
            setHideError(false);
        } else {
            setHideError(true);
            var user = {}
            user["firstName"] = firstName
            user["lastName"] = lastName
            user["gender"] = gender
            user["birthday"] = birthday
            user["ocCode"] = ocCode
            user["hasLife"] = hasLife
            user["hasDental"] = hasDental
            user["hasLtd"] = hasLtd
            callbackMethod(user)
        }
    }

    function validateEmptyTextField(aValue, isError){
        if (aValue == "" ){
            isError(true)
        } else {
            isError(false)
        }
    }
    return (
        <>
            <div hidden={hideError}>
                Please Correct Errors
            </div>
            <Card sx = {styles.card}>
                <CardHeader sx= {styles.header} title="Member Enrollment"/>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6} m={1} >
                            <TextField id="firstname-input" data-testid="firstNameId" error={firstNameIsError} label="First Name" value={firstName} variant="standard"
                                onChange={(e) => setFirstName(e.target.value)}/>
                            <TextField id="lastname-input" error={lastNameIsError} label="Last Name" variant="standard"
                                onChange={(e) => setLastName(e.target.value)}/>
                            <TextField id="gender-input" error={genderIsError} label="Sex (M/F/NP)" variant="standard"
                                onChange={(e) => setGender(e.target.value)}/>
                            <TextField id="birthday-input" error={birtydayIsError} label="Birthday (mm/dd/yyyy)" variant="standard"
                                onChange={(e) => setBirthDay(e.target.value)}/>
                            <TextField id="occode-input" error={ocCodeIsError} label="Occupation Code" variant="standard"
                                onChange={(e) => setOcCode(e.target.value)}/>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={hasLife} onChange={(e)=>{ hasLife ? setHasLife(false) : setHasLife(true)} }/>} label="Life Insurance" />
                                <FormControlLabel control={<Checkbox checked={hasDental} onChange={(e)=>{ hasDental ? setHasDental(false) : setHasDental(true)} }/>} label="Dental Insurance" />
                                <FormControlLabel control={<Checkbox checked={hasLtd} onChange={(e)=>{ hasLtd ? setHasLtd(false) : setHasLtd(true)} }/>} label="LTD Insurance" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <Button variant="outlined" size="medium" color="primary" onClick={(e) => validateUser(e, props.code)}>
                        Coded Rules
                    </Button>
                    <Button variant="outlined" size="medium" color="primary" onClick={(e) => validateUser(e, props.gorules)}>
                        GoRules Engine
                    </Button>
                    <Button variant="outlined" size="medium" color="primary" onClick={(e) => validateUser(e, props.grule)}>
                        Grule Engine
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}