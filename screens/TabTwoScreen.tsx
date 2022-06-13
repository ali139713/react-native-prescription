import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AuroraButton from '../components/AuroraButton';
import Logo from '../components/logo';
import Feather from 'react-native-vector-icons/Feather';
// import { Overlay } from 'react-native-elements';
import PopUp from '../components/popup';
import Loader from '../components/loader';

export default function Login() {
  const [overlay, setOverlay] = useState(false);
  const [OverlayText, setOverlayText] = useState("");
  const [popUpErr, setpopUpErr] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loader, setLoader] = useState(false);

  const signIn = () => {
    /// Api Call For SignIn

    /// on successfull login, navigation.navigate('Modal') ///
  }

  const validate = () => {
    if (email == '' && password == '') {
      showErr(true, true, "Unable to sign in \n please fill in all fields");
    } else if (email == '') {
      showErr(true, true, "Unable to sign in \n please enter your email");
    } else if (password == '') {
      showErr(true, true, "Unable to sign in \n please enter your password");
    } else {
      setOverlay(false);
      setLoader(true);
      signIn();
    }
  }


  const showErr = (show_overlay: boolean, show_popup: boolean, overlay_text: string) => {
    setOverlay(show_overlay);
    setpopUpErr(show_popup);
    setOverlayText(overlay_text);
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.topSection}>
          <Logo />
        </View>

        <ScrollView style={styles.bottomSection} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <View style={{ width: '95%', height: 50 }}>
              {/* <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                        <Feather size={50} color={'#fff'} name="chevron-left"/>
                    </TouchableOpacity> */}
            </View>
            <View style={{ width: '80%', marginBottom: 20 }}>
              <Text style={{ color: '#fff', fontSize: 40, marginTop: 10, marginBottom: 30 }}>Welcome {'\n'}Back</Text>
              <TextInput value={email} onChangeText={text => onChangeEmail(text)} style={{ height: 52, width: '100%', color: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'white', paddingLeft: 10 }} placeholderTextColor="#fff" placeholder="Email" />
              <TextInput value={password} onChangeText={text => onChangePassword(text)} secureTextEntry={true} style={{ height: 52, width: '100%', color: 'white', borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: 'white', paddingLeft: 10 }} placeholderTextColor="#fff" placeholder="Password" />
            </View>
            <AuroraButton buttonFunction={() => validate()} bgcolor="white" text="Sign in" color={"black"} outline={false} />
            {/* <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                      <Text style={{color:'white',marginTop:20,color:'#242424',textDecorationLine:'underline'}}>Forgot password</Text>
                </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
      {/* <Overlay isVisible={overlay}>
            <PopUp errorBtn={()=>setOverlay(false)} text={OverlayText} error={popUpErr} />
        </Overlay>
        <Overlay isVisible={loader}>
            <Loader text={'Signing you in, please wait..'}/>
        </Overlay> */}
    </>
  )
}
const styles = StyleSheet.create({
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',

  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bottomSection: {
    width: '100%',
    height: '70%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }

})