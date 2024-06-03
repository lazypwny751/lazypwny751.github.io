---
layout: default
title: EEM312 - Elektronik Devre Lab'ı 
---
# Sorular
## Gerilim yükselteci
- Vin * A = Vout

## BJT beta değeri
- Ic / Ib

## MOSFET
- Gate akımı ile Drain akımı kontrol edilir.
- BJT'ler gibi 3 çalışma bölgesi vardır.
- Giriş empedansları yüksektir.
- Gate, Drain, Source 3 bacaklı eleman.

- ! statik elektriğe karşı hassastır

## BJT
- Aktif bölgede çalışmada yükselteçtirler.
- 3 bölgeli (kesim, doyum ve aktif).
- Doyum ve kesim bölgeleri anahtarlama elemanı olarak kullanılır.
- Base akımı ile kollektör akımı kontrol edilir.

## OPAMP
- Eviren OPAMP devresinde giriş sinyalı nefatif (-) girişe bağlanırken evirmeyen devrede ise pozitif (+) girişe bağlanır.
- AC sinyalleri yükseltmek için kullanılır.
- Simetrik besleme yapılabilir.

## Zener diyot
- Ters yönde bağlanan zener diyotun önünde seri bir direnç olması gerekir.
- Zener diyottan geçecek max akım zenerin diyot gücü ile alakalıdır.
- Zener diyotlar üzerine düşen gerilim zener gerilimine ulaştığı zaman zener diyot gibi çalışır.
- Zener diyotlar ters kullanılabilir (genellikle ters kullanılır.).

## Gerilim yükseltecinin incelenmesi
- C1 ve C2 kuplaj kondansatörü AC akımı iletir, DC akımı yalıtır.
- Kararlı devredir.
- Devrenin kazancı 1'den büyük.
- Giriş sinyali ile çıkış sinyalı arasında faz farkı yok.

- ! gerilim kazancı Vi / Vo

## MOSFET transfer karakteristiği
- VGS gerilimi arttıkça drain akımı artar.
- MOSFET'in akım kontrol etme özelliğini gösterir.
- VGS gerilimi eşik gerilimini aştığında MOSFET iletime girer, düşük ise draim akımı 0'da kalır.

## BJT'nin anahtar olarak çalışması
- BJT'de güç kaybı çok fazladır.
- VCE yaklaşık 0.2v olur.
- base akımı arttıkça kollektör akımı artmaz.
- max base akımı geçecek şekilde beslenir.

# Bazı hazır cevaplar
## Zener diyotlu regülatör devresinin incelenmesi deneyinde Vs = 7.5v kaynak geriliminde ve yüksüz durumda çıkış gerilimini bulunuz.
5.1v

## Kondansatör filitreli yarım dalga doğrultucu deneyinde Vs = 15v iken çıkışı bulun. C = 100nF
8.7v

## Zener diyotlu regülatör devresinde, devreye RL = 1.5kOHM akım çekecek bir yük direnci bağlandığında çıkış gerilimindeki değişimi bulunuz.
-81mV

## Evirmeyen yükselteç
- Gerilim kazancı 1+R2 / R1 ile bulunur.
- Çıkış sinyali genliği genişleten yüksek olabilir.
- Giriş sinyali ile çıkış arasında faz farkı var.
- Çıkış sinyali genliği girişten düşük olamaz.

- ! Giriş sinyali ile çıkış sinyali arasında 180 derece faz farkı var.

## Gerilim yükseltecinin incelenmesi deneyinde Vcc = 18v ve CE kondansatörü bağlı değilken devrenin gerilim kazancını bulunuz. DC analiz sonuçları IC = 2.3mA, IB = 11.7nA
-1.6
