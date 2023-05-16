import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {userPostJob} from '../../api-request/job'
import Cookies from "js-cookie";

const skillsData = [
    {
        id :1,
        name: "React"
    },
    {
        id:2,
        name: "Node js"
    }
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
const PostJob = () => {
    const [company_name, setCompany_Name] = useState("")
    const [role, setRole] = useState("")
    const [title, setTitle] = useState("")
    const [skills, setSkills] = React.useState<string[]>([]);
    const [experience, setExperience] = useState("");
   
    const onChangeUserCompany_name = (event: any) => {
        setCompany_Name(event.target.value)
    }
    const onChangeUserRole = (event: any) => {
        setRole(event.target.value)
    }
    const onChangeUserTitle = (event: any) => {
        setTitle(event.target.value)
    }
    const onChangeUserSkills= (event: any) => {
        setSkills(event.target.value)
    }
    const onChangeUserExperience= (event: any) => {
        setExperience(event.target.value)
    }


    const onClickPostJob = async() => {
        const data = {
            company_name: company_name,
            role: role,
            title: title,
            skills: "React",
            experience: parseInt(experience),
           
        }
        console.log(data)
        const response = await userPostJob(data)
        
    }

    function getStyles(name: void, skills: any, theme: any): React.CSSProperties | undefined {
        throw new Error('Function not implemented.');
    }

    const handleChange = (event: SelectChangeEvent<typeof skills>) => {
        const {
          target: { value },
        } = event;
        setSkills(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    return (
        <Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '75ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Company_name" variant="outlined" value={company_name} onChange={onChangeUserCompany_name} />
                <TextField id="outlined-basic" label="Role" type="name" value={role} variant="outlined" onChange={onChangeUserRole} />
                <TextField id="outlined-basic" label="Title" type="name" value={title} variant="outlined" onChange={onChangeUserTitle} />
                <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={skills}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skillsData.map((item:any) => (
            <MenuItem
              key={item.id}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>                
      <TextField id="outlined-basic" label="Experience" type="number" value={experience} variant="outlined" onChange={onChangeUserExperience} />
            </Box>
           
            <br />
            <Box>
            <Button variant="contained" sx={{mx:1}} onClick={onClickPostJob}>PostJob</Button>
            <a href='/postjob'>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </a>
            </Box>
        </Box>
    )
}
export default PostJob