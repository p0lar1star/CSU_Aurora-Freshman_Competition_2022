package com.testmark.reverse;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private Button btn;
    private long res[]={391317676 ,345762867 ,595821075 ,461579316 ,63595398 ,518615069 ,849300837 ,15536977},MOD=(long)(1e9)+7;
    private long quickpow(long base,long power,long mod){
        long result=1;
        while(power!=0){
            if((power&1)!=0){
                result=result*base%mod;
            }
            base=base*base%mod;
            power>>=1;
        }
        return result%mod;
    }
    private String getflag(){
        String flag="";
        long res[]={237889852 ,314194528 ,664131622 ,346548417 ,897158222 ,463648399 ,160980662 ,495535648};
        for(int l1=0;l1<res.length;l1++){
            long tmp=quickpow(res[l1],MOD-2,MOD);
            if(btn.isEnabled()){
                tmp=quickpow(this.res[l1],MOD-2,MOD);
            }
            char a,b,c;
            c=(char)((tmp&(0x7F)));System.out.println(tmp&0x7f);
            tmp>>=7;
            b=(char)((byte)tmp&(0x7F));
            tmp>>=7;
            a=(char)(tmp&0x7f);
            System.out.println(a+""+b+c+"");
            flag=flag+a+b+c;
        }

        return flag;
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn=findViewById(R.id.button);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this,getflag(),Toast.LENGTH_SHORT).show();
            }
        });
    }

}