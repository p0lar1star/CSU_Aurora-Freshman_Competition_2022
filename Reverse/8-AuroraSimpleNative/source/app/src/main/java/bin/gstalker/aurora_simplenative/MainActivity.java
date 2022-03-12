package bin.gstalker.aurora_simplenative;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void launch(View v){
        EditText inputView = findViewById(R.id.flagGetter);
        TextView resultView = findViewById(R.id.resultTextView);
        String input = inputView.getText().toString();
        if(EagleEye.check(input)){
            resultView.setText(R.string.result_1);
        }
        else{
            resultView.setText(R.string.result_0);
        }
    }
}