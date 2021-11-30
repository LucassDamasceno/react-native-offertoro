package com.reactnativeoffertoro;


import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.offertoro.sdk.OTOfferWallSettings;
import com.offertoro.sdk.sdk.OffersInit;

@ReactModule(name = OffertoroModule.NAME)
public class OffertoroModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Offertoro";

  public OffertoroModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @ReactMethod
  public void show(final String appId, final String secretKey, final String pubUid) {
    Activity activity = getCurrentActivity();
    OTOfferWallSettings.getInstance().configInit(appId,
      secretKey, pubUid);
    OffersInit.getInstance().create(activity);
    OffersInit.getInstance().showOfferWall(activity);
  }

  public static native int nativeMultiply(int a, int b);

}
