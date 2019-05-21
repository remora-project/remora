package main.java;

import java.lang.instrument.Instrumentation;

public class JavaAgent {
	public void premain(String args, Instrumentation inst) {

		inst.addTransformer(new Transformer());

	}
}
