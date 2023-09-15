import { StyleSheet } from 'react-native';

const authStyle = StyleSheet.create({
  authTextBox: {
    height: 78,
    justifyContent: 'space-between',
    marginBottom: 37,
  },
  authText: {
    color: '#101D21',
    fontSize: 35,
    fontWeight: '600',
  },
  hiText: {
    color: '#7C8487',
    fontSize: 14,
    fontWeight: '400',
  },
  textInput: {
    height: 46,
    color: '#101D21',
    fontSize: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    paddingLeft: 16,
    alignItems: 'center',
  },
  authBtn: {
    height: 53,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1.7,
    shadowColor: '#101D21',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  authTextBtn: {
    color: '#fff',
    fontSize: 15.5,
    fontWeight: '500',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  navigateBox: {
    paddingTop: 25,
  },
  navigateText: {
    color: '#374245',
    fontSize: 12,
    fontWeight: '500',
  },
  snsLoginBox: {
    height: 82,
    marginTop: 97,
    justifyContent: 'space-between',
  },
  snsText: {
    color: '#7C8487',
    fontSize: 12,
    fontWeight: '400',
  },
  grayLineLogin: {
    height: 1,
    width: 103,
    backgroundColor: '#E5E5E5',
  },
  grayLineSignup: {
    height: 1,
    width: 97,
    backgroundColor: '#E5E5E5',
  },
  grayLineTextBox: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  googleAndKakao: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  snsBtn: {
    width: 73,
    height: 43,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoBtn: {
    marginLeft: 6,
  },
  authSubmit: {
    paddingTop: 12,
  },
  errorText: {
    color: '#4B99C5',
    fontSize: 11,
    fontWeight: '400',
    paddingTop: 3.5,
  },
});

export default authStyle;
