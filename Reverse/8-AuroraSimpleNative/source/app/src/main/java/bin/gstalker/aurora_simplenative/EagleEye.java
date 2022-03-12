package bin.gstalker.aurora_simplenative;

public class EagleEye {
    static{
        System.loadLibrary("EagleEye");
    }
    public static native boolean check(String input);
}
