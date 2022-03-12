package bin.gstalker.aurora_basicandroid;

import android.annotation.SuppressLint;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import static bin.gstalker.aurora_basicandroid.Answer.vec;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @SuppressLint("SetTextI18n")
    public void launch(View v){
        EditText receiver = findViewById(R.id.flagReceiver);
        TextView result = findViewById(R.id.resultTextView);
        String input = receiver.getText().toString();
        boolean checkResult = false;
        try{
            checkResult = check(input);
        }
        catch(Throwable ignored){}

        if(checkResult){
            result.setText("Success");
        }
        else{
            result.setText("FAIL!");
        }
    }

    private Boolean check(String flag){
        if(flag.length() < 6) return false;
        String prefix = flag.substring(0,5); //get "actf{"
        String postfix = flag.substring(flag.length()-1);
        if(!prefix.equals("actf{") || !postfix.equals("}")){
            return false;
        }
        char[] array = flag.substring(5,flag.length()-1).toCharArray();
        int i = 0;
        for( ; i < array.length ; ++i){
            int iter = Integer.parseInt(String.valueOf(array[i]));
            if(iter != vec[i]){
                return false;
            }
        }
        return i >= vec.length;
    }
}