// Components
import { GridContainer, GridItem } from '../components';
import { Card, CardTitle } from '../components';
import { CustomText } from '../components';
import { SnackbarButton } from '../components';

const Notification = () => {

  return (
    <GridContainer>
      <GridItem size={12}>
        <Card>
          <CardTitle>
            <CustomText large>Notifications</CustomText>
            <CustomText small>Handcrafted by our friends from Material UI and styled by Creative Tim. Please checkout the full documentation.</CustomText>
          </CardTitle>
          <CustomText large style={{ textAlign: 'center' }}>
            Notifications Places
          </CustomText>
          <CustomText gray style={{ textAlign: 'center' }}>
            Click to view notifications
          </CustomText>
          <GridContainer style={{ alignSelf: 'center', paddingBottom: '0' }}>
              <SnackbarButton 
                position="top-left" 
                buttonText="top-left"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton 
                position="top-center" 
                buttonText="Top-Center"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton 
                position="top-right" 
                buttonText="top-right"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
          </GridContainer>
          <GridContainer style={{ alignSelf: 'center', paddingTop: '0' }}>
              <SnackbarButton 
                position="bottom-left" 
                buttonText="bottom-left"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton 
                position="bottom-center" 
                buttonText="bottom-center"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton 
                position="bottom-right" 
                buttonText="bottom-right"
                style={{ width: '300px' }}
              >
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
          </GridContainer>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Notification;