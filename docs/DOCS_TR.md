# WebView Expo Projesi Çalıştırma Rehberi

Bu rehber, Expo ve TypeScript kullanarak geliştirdiğimiz WebView projesini nasıl çalıştıracağınızı adım adım açıklayacaktır.

## Gereksinimler

- Node.js ve npm yüklü olmalıdır.

- Expo CLI yüklü olmalıdır.

Expo'yu yüklemek için:

```bash
npm install -g expo-cli
```

# Adım 1: Projeyi Başlatma

1. Proje Dizininde Olduğunuzdan Emin Olun

Projenizin kök dizinine geçin. Örneğin:

```
cd WebViewApp
```

2. Projeyi Başlatın

Aşağıdaki komutu çalıştırarak projenizi başlatın:

```
expo start
```

Bu komut, Expo geliştirici araçlarını başlatır ve sizi tarayıcıda bir önizleme sayfasına yönlendirir. Buradan QR kodunu tarayarak uygulamanızı telefonunuzda çalıştırabilirsiniz.

# Adım 2: Uygulamayı Telefonunuzda Çalıştırma
1. Expo Go Uygulamasını İndirin

Telefonunuzda Expo Go uygulamasını indirmeniz gerekecek. Bu uygulama, Expo projelerinizi telefonunuzda çalıştırmanıza olanak tanır.


2. QR Kodunu Tarayın

Expo'nun çalıştırdığı geliştirici aracında bir QR kodu göreceksiniz. Telefonunuzdaki Expo Go uygulaması ile bu QR kodunu tarayın.

3. WebView Uygulamanız Çalışıyor Olacak!

Tarayıcı veya Expo Go uygulaması üzerinden WebView projenizi görebilir ve test edebilirsiniz.

# Adım 3: Uygulamayı Android veya iOS Cihazında Çalıştırma
Expo'nun sunduğu özelliklerden birisi, doğrudan cihazınızda uygulamayı test edebilmenizdir. Android veya iOS cihazınızda yerel olarak test etmek için şu adımları izleyebilirsiniz:

## Android için:
Android cihazınızı bilgisayarınıza bağlayın.

Aşağıdaki komutu kullanarak Android cihazınızda projeyi çalıştırın:

```
expo run:android
```

## iOS için:
Mac cihazınızda Xcode kurulu olmalıdır.

Aşağıdaki komutu kullanarak iOS cihazınızda projeyi çalıştırın:

```
expo run:ios
```

Not: Eğer cihazınızda sorun yaşarsanız, Expo'nun geliştirici araçları ile ilgili belgeleri inceleyebilirsiniz.