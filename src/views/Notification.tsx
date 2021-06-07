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
          <GridContainer>
              <SnackbarButton position="top-left" buttonText="top-left">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton position="top-center" buttonText="Top-Center">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton position="top-right" buttonText="top-right">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
          </GridContainer>
          <GridContainer>
              <SnackbarButton position="bottom-left" buttonText="bottom-left">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton position="bottom-center" buttonText="bottom-center">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
              <SnackbarButton position="bottom-right" buttonText="bottom-right">
                Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.
              </SnackbarButton>
          </GridContainer>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Notification;