import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Frcnt } from "../target/types/frcnt";

describe("frcnt", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Frcnt as Program<Frcnt>;

  it("Is initialized!", async () => {
    // Add your test here.
    const dataAccountKP = anchor.web3.Keypair.generate();
    const user = anchor.web3.Keypair.fromSecretKey(new Uint8Array([181,76,51,165,219,117,38,107,126,217,133,2,219,165,51,182,129,190,138,29,223,33,5,188,247,22,116,187,247,105,172,13,7,36,45,131,253,107,220,48,88,38,143,189,242,11,211,195,8,0,118,163,128,163,223,74,71,17,20,222,47,23,154,157]));
    const tx = await program.methods.myInstruction(new anchor.BN(666))
      .accounts({
        dataAccount: dataAccountKP.publicKey,
        user: user.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([user, dataAccountKP])
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
