package com.remora.agent;

import java.lang.instrument.Instrumentation;

public class Agent {

  public void premain(String args, Instrumentation inst) {
    inst.addTransformer(new Transformer());
  }

}
