import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderPicture from "./MagicTG.png";
import Select from "react-select";
import axios from "axios";
import Button from "@material-ui/core/Button";

// "https://api.magicthegathering.io/v1/cards?set=SOI";

function Header({ setCardSetToFetch }) {
  const [selectOptions, setSelectOptions] = useState([]);
  const [codeOfSet, setCodeOfSet] = useState("");

  useEffect(() => {
    async function getOptions() {
      const res = await axios.get("https://api.magicthegathering.io/v1/sets");
      const data = res.data;

      console.log(data);

      data.sets.sort(function (a, b) {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });

      const options = data.sets.map((d) => ({
        value: d.code,
        label: d.name,
      }));

      setSelectOptions(options);
    }

    getOptions();
  }, []);

  return (
    <div className="header">
      <img
        className="header-photo"
        src={HeaderPicture}
        alt={"Magic The Gathering"}
      />{" "}
      <div className="select-option">
        <Select
          placeholder={"Select a Set ..."}
          className="select"
          options={selectOptions}
          onChange={(value) => {
            console.log(value);
            setCodeOfSet(value.value);
          }}
        />{" "}
        <Button
          variant="contained"
          onClick={() => {
            setCardSetToFetch(codeOfSet);
          }}
        >
          GATHER
        </Button>
      </div>
    </div>
  );
}

export default Header;
