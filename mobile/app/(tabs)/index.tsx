import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/inter.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá Samara</ThemedText>
        
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo da conta</ThemedText>
        <ThemedText>
          
           R$: 500.000,00
        </ThemedText>
      </ThemedView><Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#ff8c00' : '#ff8c00', // Escurece quando pressionado
            padding: 6,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
          })}
        >
          <ThemedText style={{ color: 'dark', fontWeight: 'bold' }}>PIX</ThemedText>
        </Pressable>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fatura</ThemedText>
        <ThemedText>
          R$: 5000,00
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CARTAO VIRTUAL</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',  
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
