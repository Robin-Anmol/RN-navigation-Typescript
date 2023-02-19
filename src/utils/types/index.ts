import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

// import

export enum RootStackScreenName {
  MainNav = 'MainNav',
  Feed = 'Feed',
  Explore = 'Explore',
}

export enum BottomTabsScreenName {
  Home = 'Home',
  Profie = 'Profile',
  Setting = 'Setting',
}

export enum ProfileStackScreenName {
  ProfileScreen1 = 'ProfileScreen1',
  ProfileScreen2 = 'ProfileScreen2',
}

export type RootStackParamsList = {
  [RootStackScreenName.MainNav]: NavigatorScreenParams<BottomTabParamList>;
  [RootStackScreenName.Feed]:
    | {
        name: string;
      }
    | undefined;
  [RootStackScreenName.Explore]: undefined;
};

export type RootStackScreenProps<
  RouteName extends keyof RootStackParamsList = RootStackScreenName,
> = StackScreenProps<RootStackParamsList, RouteName>;

export type MainNavTabScreenProps<
  RouteName extends keyof BottomTabParamList = BottomTabsScreenName,
> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, RouteName>,
  RootStackScreenProps<keyof RootStackParamsList>
>;

export type BottomTabParamList = {
  [BottomTabsScreenName.Home]: undefined;
  [BottomTabsScreenName.Profie]: NavigatorScreenParams<ProfileStackParamList>;
  [BottomTabsScreenName.Setting]: undefined;
};

export type ProfileStackParamList = {
  [ProfileStackScreenName.ProfileScreen1]: undefined;
  [ProfileStackScreenName.ProfileScreen2]: undefined;
};

export type ProfileScreenProps<
  RouteName extends keyof ProfileStackParamList = ProfileStackScreenName,
> = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, RouteName>,
  CompositeScreenProps<
    MainNavTabScreenProps<keyof BottomTabParamList>,
    RootStackScreenProps<keyof RootStackParamsList>
  >
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
