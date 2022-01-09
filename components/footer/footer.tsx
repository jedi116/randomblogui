import { Link } from "@mui/material";
import React, {FC} from "react";
import { Col, Container, Row } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LoginIcon from '@mui/icons-material/Login';
import TwitterIcon from '@mui/icons-material/Twitter';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TopicIcon from '@mui/icons-material/Topic';
import PostAddIcon from '@mui/icons-material/PostAdd';

export const Footer:FC<{}> = () => {
    return (
        <>  
            <div style = {{ color:'white'}} className="footer-container" >
                <div style = {{display: 'flex',justifyContent:'center'}}>
                   <h3> Random Blog </h3> 
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="footer-first-row">
                                Social Media
                            </td>
                            
                            <td className="footer-second-row" >
                                Account 
                            </td>
                            <td className="footer-third-row" >
                                Blog
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="footer-first-row">
                            <Link href = '/' underline='hover'> <RedditIcon/> reddit  </Link>
                            </td>
                            
                            <td className="footer-second-row">
                                <Link href = '/' underline='hover'> <LoginIcon/> Login  </Link>
                            </td>
                            
                            <td className="footer-third-row">
                                <Link href = '/' underline='hover'> <TopicIcon/> Top Topics  </Link>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="footer-first-row" >
                                <Link href = '/' underline='hover'> <TwitterIcon/> twitter  </Link>
                            </td>
                            
                            <td className="footer-second-row">
                                <Link href = '/' underline='hover'> <LockOpenIcon/> sign up  </Link>
                            </td>
                            
                            <td className="footer-third-row">
                                <Link href = '/' underline='hover'> <TopicIcon/> Your Topics  </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="footer-first-row">
                            <Link href = '/' underline='hover'> <FacebookIcon/> facebook  </Link>
                            </td>
                            
                            <td className="footer-second-row">
                                 <Link href = '/' underline='hover'> <AccountBoxIcon/> profile  </Link>
                            </td>
                            
                            <td className="footer-third-row">
                                 <Link href = '/' underline='hover'> <PostAddIcon/> Your post  </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}