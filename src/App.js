import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Modal,
  TextField,
  Grid,
  Link,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CustomerServiceIcon from '@mui/icons-material/SupportAgent';

const Logo = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
});

const Subtitle = styled(Typography)({
  fontSize: '0.75rem',
  color: '#666',
});

const Footer = styled(Box)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem 0',
  marginTop: '2rem',
});

const FooterLogo = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '1rem',
});

const FaqButton = styled(Button)({
  marginBottom: '1rem',
  textTransform: 'none',
});



const ImageContainer = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
});

const CircleText = styled(Box)({
  position: 'absolute',
  color: 'black',
  fontWeight: 'bold',
  width: '18%',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: '1.2',
  fontSize:'15px'
});

const IconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'skyblue',
  marginBottom: '8px',
  fontSize: '40px', // Adjust icon size
});

function App() {
  const [open, setOpen] = useState(false);
  const [courseAnchorEl, setCourseAnchorEl] = useState(null);
  const [faqContent, setFaqContent] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCourseClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };
  const handleCourseClose = () => {
    setCourseAnchorEl(null);
  };

  const handleFaqClick = (content) => {
    setFaqContent(content);
  };

  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.yourName) tempErrors.yourName = 'This field is required';
    if (!formData.yourEmail) tempErrors.yourEmail = 'This field is required';
    if (!formData.friendName) tempErrors.friendName = 'This field is required';
    if (!formData.friendEmail) tempErrors.friendEmail = 'This field is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log(formData);
      handleClose();
    }
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor:'skyblue', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" align="center">
            Navigate your path with tailored expert advice
          </Typography>
          <Link href="#" color="inherit" sx={{ ml: 2 ,color:'darkblue',textDecoration:'none'}}>Contact Expert</Link>
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="default">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Logo>Accredian</Logo>
            <Subtitle>Credentials that matter</Subtitle>
            <Button color="inherit" onClick={handleCourseClick} sx={{ ml: 2,color:'white',backgroundColor:'blue','&:hover':{backgroundColor:'skyblue'} }}>Courses</Button>
          </Box>
          <Menu
            anchorEl={courseAnchorEl}
            open={Boolean(courseAnchorEl)}
            onClose={handleCourseClose}
          >
            <MenuItem onClick={handleCourseClose} sx={{'&:hover':{backgroundColor:'skyblue'}}}>Course 1</MenuItem>
            <MenuItem onClick={handleCourseClose} sx={{'&:hover':{backgroundColor:'skyblue'}}}>Course 2</MenuItem>
            <MenuItem onClick={handleCourseClose} sx={{'&:hover':{backgroundColor:'skyblue'}}}>Course 3</MenuItem>
          </Menu>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'skyblue' } }}>Refer & Earn</Button>
            <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'skyblue' } }}>Resources</Button>
            <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'skyblue' } }}>About Us</Button>
            <Button variant="contained" style={{ backgroundColor: 'brown', marginRight: '10px' }}>Login</Button>
            <Button variant="contained" style={{ backgroundColor: 'blue' }}>Try for Free</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Box display="flex" justifyContent="center" mb={2} sx={{backgroundColor:'skyblue'}}>
            <Button sx={{  mx: 1,color:'black' }}>Refer</Button>
            <Button sx={{  mx: 1,color:'black' }}>Benefits</Button>
            <Button sx={{  mx: 1,color:'black' }}>FAQs</Button>
            <Button sx={{  mx: 1,color:'black' }}>Support</Button>
          </Box>

          <Box display="flex" justifyContent="center" mb={2}>
            <img src="/images/image2.png" alt="Refer" style={{ width: '40%', cursor: 'pointer' }} />
            <img src="/images/referimage.avif" alt="Refer" style={{ width: '30%', cursor: 'pointer', marginLeft: '10px' }} />
          </Box>
          <br/>
          <br/>
          <Typography variant="h5" align="center" mb={2} sx={{color:'blue',fontWeight:'bold',fontSize:'40px'}}>How do i <span style={{color:'red'}}>REFER?</span> </Typography>
          <ImageContainer>
    <img src="/images/image1.png" alt="Refer & Earn Process" style={{ width: '100%' }} />
    <CircleText style={{ top: '45%', left: '12%' }}>
      <IconContainer>
        <PersonAddIcon style={{ fontSize: '38px' }} />
      </IconContainer>
      Submit referrals easily via our website’s referral section.
    </CircleText>
    <CircleText style={{ top: '45%', left: '40%' }}>
      <IconContainer>
        <EditIcon style={{ fontSize: '40px' }} />
      </IconContainer>
      Earn rewards once your referral joins an Accredian program.
    </CircleText>
    <CircleText style={{ top: '45%', left: '68%' }}>
      <IconContainer>
        <WorkIcon style={{ fontSize: '40px' }} />
      </IconContainer>
      Both parties receive a bonus 30 days after program enrollment.
    </CircleText>
  </ImageContainer>

          

          <br/>
          <br/>

          <Typography variant="h5" align="center" mb={2}>What Are the <span style={{color:'cadetblue'}}>Referral Benefits?</span></Typography>
          <br/>
          <br/>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <TableContainer component={Paper} sx={{ width: '30%', marginRight: '10px',borderBlockColor:'black' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{backgroundColor:'blue',color:'white'}}>All Programs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>PRODUCT MANAGEMENT</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>STRATEGY & LEADERSHIP</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>BUSINESS AMANGEMENT</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>FINTECH</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>SENIOR MANAGEMENT</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>DATA SCIENCE</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>DIGITAL TRANSFORMATION</TableCell>
                    </TableRow>
                  
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper} sx={{ width: '65%' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{backgroundColor:'skyblue'}}> 
                    <TableCell >Programs</TableCell>
                    <TableCell>Referrer Bonus</TableCell>
                    <TableCell>Referee Bonus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow  >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>Professional Certificate in Product Managemment </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$7000 </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$9000 </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>PG Certificate Program in Strategice Product Management </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$10000 </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$10000 </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>Executive Program in Data Driven Product Management and Digital Transformation </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$10000 </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$10000 </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>PG Certificate Program in Strategice Product Management </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$9000 </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$11000 </TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>Executive Program in Product Management </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$9000 </TableCell>
                      <TableCell sx={{'&:hover':{backgroundColor:'skyblue',color:'black'}}}>$11000 </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box display="flex" justifyContent="center" mb={4}>
            <Button variant="contained" color="primary" onClick={handleOpen}>Refer</Button>
          </Box>

          <Box my={4} p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h5">Frequently Asked Questions</Typography>
            <Box display="flex" mt={2}>
              <Box mr={2}>
                <FaqButton fullWidth onClick={() => handleFaqClick('Eligibility for to take a course is must be a Graduate or a Post Graduate')} variant="outlined">Eligibility</FaqButton>
                <FaqButton fullWidth onClick={() => handleFaqClick('When you buy a course or joined a course ,there should be daily live classes  and extra sessions for doubt sessions')} variant="outlined">How to Use</FaqButton>
                <FaqButton fullWidth onClick={() => handleFaqClick('Terms & Conditions Content....#Terms & Conditions Content...Terms & Conditions Content@Terms & Conditions Content!VTerms & Conditions Content$Terms & Conditions Content%Terms & Conditions Content^Terms & Conditions Content&Terms & Conditions Content ')} variant="outlined">Terms & Conditions</FaqButton>
              </Box>
              <Box sx={{ flexGrow: 1, p: 2, backgroundColor: '#fff', borderRadius: 2 }}>
                <Typography variant="body1">{faqContent}</Typography>
              </Box>
            </Box>
          </Box>

          <Box my={4} p={2} sx={{ backgroundColor: 'skyblue', borderRadius: 2, textAlign: 'center' }}>
            <CustomerServiceIcon sx={{ fontSize: '2rem', mb: 2 }} />
            <Typography variant="h6">Want to delve deeper into the program?</Typography>
            <Typography>Share your details to get an expert phone call.</Typography>
          </Box>
        </Box>
      </Container>

      <Footer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FooterLogo>Accredian</FooterLogo>
              <List>
              <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText  primary="Programs" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Data Science & Ai" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Product Management" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Business Analytics" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Digital Trnasformation" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Mern Stack" />
                </ListItem>
                <ListItem sx={{fontSize:'large','&:hover':{backgroundColor:'skyblue',color:'black',fontStyle:'italic'}}}>
                  <ListItemText primary="Python Full Stack" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Contact Us</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Email: contact@accredian.com" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone: (123) 456-7890" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Terms of Service" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Footer>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 10, p: 4, backgroundColor: 'white', boxShadow: 24 }}>
          <Typography variant="h6" component="h2">Refer a Friend</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Your Name"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              error={Boolean(errors.yourName)}
              helperText={errors.yourName}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Your Email"
              name="yourEmail"
              value={formData.yourEmail}
              onChange={handleChange}
              error={Boolean(errors.yourEmail)}
              helperText={errors.yourEmail}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Friend's Name"
              name="friendName"
              value={formData.friendName}
              onChange={handleChange}
              error={Boolean(errors.friendName)}
              helperText={errors.friendName}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Friend's Email"
              name="friendEmail"
              value={formData.friendEmail}
              onChange={handleChange}
              error={Boolean(errors.friendEmail)}
              helperText={errors.friendEmail}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
