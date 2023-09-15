import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, View, Text, TextInput, Alert } from 'react-native';
import { auth } from '../../firebase/config';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  setToggleModal: (value: boolean) => void;
  type: string;
}

/*
 *  상위에서 쓰이고 있는 useSate
 *  const [toggleModal, setToggleModal] = useState(false);
 */
function CustomModal({ setToggleModal, type }: Props) {
  const [loading, setLoading] = useState(false);
  const [deleteTxt, setDeleteTxt] = useState('');
  const [message, setMessage] = useState('');
  const [modalHeight, setModalHeight] = useState(0);
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    if (type === '탈퇴') {
      setMessage('탈퇴하시겠습니까? 탈퇴 후에는 다시 복구할 수 없습니다.');
      setDeleteTxt('탈퇴');
      setModalHeight(241);
      return;
    }

    if (type !== '탈퇴') {
      setDeleteTxt('삭제');
    }

    if (type === '플레이리스트삭제') {
      setMessage('이 플레이리스트를 삭제하시겠습니까? 삭제 후에는 다시 복구할 수 없습니다.');
      setModalHeight(207);
    }

    if (type === '플레이리스트에서한곡삭제') {
      setMessage('선택한 1곡을 재생목록에서 삭제하시겠습니까?');
      setModalHeight(180);
    }
  }, []);

  const handleWithdrawal = async () => {
    /* 유저 탈퇴 */
    const user = auth.currentUser;
    if (type === '탈퇴' && user) {
      try {
        setLoading(true);
        if (user.email) {
          const email = user.email;
          const credential = EmailAuthProvider.credential(email, password);
          await reauthenticateWithCredential(user, credential);
          await deleteUser(user);
          navigation.navigate('Login');
          setToggleModal(false);
        }
        setLoading(false);
      } catch (error) {
        console.log('회원 탈퇴 실패:', error);
        setLoading(false);
        Alert.alert('회원 탈퇴 도중에 문제가 발생했습니다.', String(error), [{ text: '닫기' }], {
          cancelable: true,
        });
      }
    }

    /* 플레이리스트 삭제 */
    if (type === '플레이리스트삭제') {
    }

    /* 플레이리스트에서 한 곡 삭제 */
    if (type === '플레이리스트에서한곡삭제') {
    }
  };

  /* style */
  const dynamicStyle = StyleSheet.create({
    modalHeight: {
      height: modalHeight,
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setToggleModal(false);
      }}
    >
      {/* 뒷 배경 */}
      <TouchableOpacity
        style={styles.background}
        onPress={() => {
          setToggleModal(false);
        }}
      ></TouchableOpacity>

      <View style={styles.centeredView}>
        <View style={[styles.modalView, dynamicStyle.modalHeight]}>
          <View style={styles.textBox}>
            <Text style={styles.modalText}>{message}</Text>
          </View>

          <TextInput
            style={styles.pwdInput}
            onChangeText={setPassword}
            placeholder="계정 비밀번호 입력"
            placeholderTextColor="#B6BABC"
            returnKeyType="done"
            secureTextEntry={true}
            textContentType={'oneTimeCode'}
          />

          <View style={styles.cancelOrDeleteBox}>
            <TouchableOpacity
              style={styles.cancelOrDeleteBtn}
              onPress={() => {
                setToggleModal(false);
              }}
            >
              <Text style={styles.cancelText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={loading}
              onPress={handleWithdrawal}
              style={styles.cancelOrDeleteBtn}
            >
              <Text style={styles.deleteText}>{deleteTxt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'absolute',
    width: 315,
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    color: '#101D21',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  textBox: {
    paddingTop: 36,
    paddingHorizontal: 41.5,
    alignItems: 'center',
  },
  cancelOrDeleteBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelOrDeleteBtn: {
    width: 146,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: '#7C8487',
    fontSize: 17,
    fontWeight: '500',
    textShadowColor: '#7C8487',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  deleteText: {
    color: '#E26161',
    fontSize: 17,
    fontWeight: '500',
    textShadowColor: '#E26161',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pwdInput: {
    width: 239,
    height: 46,
    color: '#101D21',
    fontSize: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    paddingLeft: 16,
    marginTop: 15,
    marginBottom: 11,
    marginHorizontal: 32,
  },
});
