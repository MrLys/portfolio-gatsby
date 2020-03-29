import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from "../components/main";

const ButtonLink = props => (
 <Link to={props.url}>
   {props.text} <FontAwesomeIcon icon={props.icon} />
 </Link>
)
