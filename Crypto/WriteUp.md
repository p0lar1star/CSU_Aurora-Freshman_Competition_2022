# Crypto

## easy_vigenere

- 如题，就是简单的维吉尼亚多表替代加密
    ```python
    #encoding=utf-8
    from Cryptodome.Util.number import long_to_bytes

    a = 120098643657610017418487724889813235491277509610386814566345065500928559509417752788904012768042772235437777076962027301650014180117867433253802872704879419282817258204306416545282941446040570198361173745520640674780107065072965050799276401692291773369088191085062371579210782164945038966022062237222328307040092674186656442937817348724086198402179295838076146453225946119614895462849552001579317739601968182186723231573118868583734317407239165049544669842113879286883515735350294528387456038060001989649588506005079544374202119431402050215277126910825533502060363250870029219646224927570236157313833526802941980931667256935352762640566408152515600449132926368677749119421330650712760290435104047718991118119339605794254939642130519868777168625889917634263112077634544646362348169017887220723656289116035274466978316082245557611058673968294391479895776694721928318311673022226569579211795910231367766424558202627062776632512039770973591293905291201983741133071345935474690937625071796804820749868878123300835241304726191613247145747398359583043121913660105276708910357359575142971223050726454097515095572317491646473847981943043035265276557546695641558110661848056554899745121270914037104582048112396275466574320051203046222414705284821582156695981248380203575706368065631387136768897320830496502588925098212109953049859816723353168997068274228883846245426237312840091428115059520393623956340811389319175348555812287505601150674913730402942792738687091618346696892821528218787751074065754182307845180351690575074745966678358759003951358836343238442187411932063326463032147806837745131423151600824605504036096982310500988693570164078703145533891834096883402925929196846815128223736202212857217488973967766365379280450632737318676660007068980147045695824142040211928037621917
    print(long_to_bytes(a).decode("utf-8"))
    ```

- 得到字符串
    ```
    izyu{c oaqi a giiay} wvyh iue yey hmirk yojzyf scelo si ejdzrsx, hny ivhic huoz ybx toprtdzr stdzj py tayi lrn, xhq ucsub wlvgev nmlx es koxl pgeiq, rrd fks afivkzh porgee zwjz vl mvhe vkvaujvr, ohk tci gofvy ai hfs fvry whdcp bq ustsusey eng rpl rosqv moagp shv mt fruchblr.git iiiepra pwhn. aih wkvr ttlg fojweiw, aqu ahqq kc ofsor jrhvhoy uwlu — qoei ae ovx if uwlu zyoh ivhic vuozyuy hny ivhic hmpzch, zyoh ivhic sfdhc ohk eqirb tmtk, zs uwfs bz ebov xo esscr ow tcet grc wthb yzf vf bsd’v tlixgfcb — vsaxo mhe enp zvghy tei, nezj enp jslhcsen, trrkisfdbrg uud xetkfpiov — kgzf ie vflh ks jalb fohks vrd vzrg uq hfs qvryw oi kle aor lsayo ntiuzxumo: “tpsy ht gesw! wveq dh joma! tcenn xsd moagubay, ri auv jrqh or zuzt!”
    ```

- so,接下来你可以根据维吉尼亚加密的特性对这个字符串进行解密，由于ctf-wiki上已经将原理写得非常清楚，所以此处不再过多赘述，有不懂的可以群里提问，当然你也可以使用现成的工具进行解密，但我更推荐看懂原理之后自己手撸一下解密算法，本题为了降低难度特意加长了文本长度以便现成的工具能够正确解密
- **flag:** flag{I have a dream} that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight, and the glory of the Lord shall be revealed and all flesh shall see it together.Let freedom ring. And when this happens, and when we allow freedom ring — when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God’s children — black men and white men, Jews and Gentiles, Protestants and Catholics — will be able to join hands and sing in the words of the old Negro spiritual: “Free at last! Free at last! Thank God Almighty, we are free at last!”
- [ctf-wiki:vigenere](https://ctf-wiki.org/crypto/classical/polyalphabetic/#vigenere)
- [现成解密工具](https://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx)

## hello

- 简单的单表替代加密，就是最基础的凯撒密码
- encry:
    ```python
    flag = 'hello newbie,enjoy yourself'

    key = 8
    base = ord('a')

    cipher=''

    for i in flag:
        if i.isalpha():
            cipher += chr((ord(i)+key)%26+base)
        else:
            cipher += i

    print(cipher)
    ```
- decry:
    ```python
    plainText = "ifmmp ofxcjf,fokpz zpvstfmg"
    base = ord('a')
    for i in range(26):
        flag = ""
        for j in plainText:
            if j.isalpha():
                flag += chr((ord(j)+i)%26+base)
            else :
                flag += j
        print(flag)
    
    ```

## ok不ok?

- Ook解密
- flag: are you ok?
- [解密网站](https://www.splitbrain.org/services/ook)

## 头脑风暴

- 经典brainfuck
- flag: start your brainstorming
- 解密工具同上

## 猪肉

- 培根密码
- flag: do you like becon
- 一搜一大把，这里简单提供一个[培根密码](https://wtool.com.cn/baconian.html)